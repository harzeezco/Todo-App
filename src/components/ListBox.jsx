import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import List from "./List";
import { toast } from "react-toastify";
import { SERVERURL } from "../App";

const ListBox = ({refresh, setLists, setUpdate, setUpdateID, setRefresh}) => {
  const [todosList, setTodoList] = useState([]);

  let sortBy;

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(`${SERVERURL}/api/todos`);
      const { data } = res.data;
      setTodoList([...data.todos].reverse());
    } catch (error) {
      toast.error(error.message);
    }
  }, [refresh]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (_id) => {
    try {
    await axios.delete(`${SERVERURL}/api/todos/${_id}`)
      .catch(error => toast.error(error.message))
    setTodoList(todosList.filter((list) => list._id !== _id));
    toast.success('Todo deleted successfully')
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleEdit = async (_id, todo) => {
    setLists((prev) => ({ ...prev, todo }));
    setUpdate(true)
    setUpdateID(_id)
  }

  const handleCompleted = async (id) => {
    try {
      await axios.patch(`${SERVERURL}/api/todos/${id}`, { isCompleted: true })
      toast.success('Todo Completed successfully')
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.message)
    }
  }

  sortBy = todosList;
  
  return (
    <div className="items-box">
      <ul>
        {sortBy.map((list) => {
          return (
            <List
              key={list._id}
              list={list}
              onToggleEdit={() => handleEdit(list._id, list.todo)}
              onToggleDelete={() => handleDelete(list._id)}
              onToggleCompleted={() => handleCompleted(list._id)}
            />
          );
        })}
      </ul>
    </div>
  );
};


ListBox.propTypes = {
  setRefresh: PropTypes.func,
  setUpdateID: PropTypes.func,
  setUpdate: PropTypes.func,
  setLists: PropTypes.func,
  refresh: PropTypes.bool,
  lists: PropTypes.array,
};

export default ListBox;
