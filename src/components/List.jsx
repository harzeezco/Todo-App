import CheckBox from "./CheckBox";
import { FaEdit } from "react-icons/fa";

import PropTypes from "prop-types";

const List = ({
  list: { isCompleted, todo, _id },
  onToggleDelete,
  onToggleEdit,
  onToggleCompleted
}) => {

  return (
    <li className="list" key={_id}>
      <div className={`flex  ${isCompleted && "completed"} small-gap`}>
        <CheckBox
          active="active"
          onToggleCompleted={onToggleCompleted}
          isCompleted={isCompleted}
        />
        <p>{todo}</p>
      </div>
      <div className="flex small-gap">
        <button className="cursor" onClick={onToggleDelete}>
        X
      </button>
      <button onClick={onToggleEdit}>
        <FaEdit />
      </button>
      </div>
    </li>
  );
};

List.propTypes = {
  list: PropTypes.object,
  onToggleEdit: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  onToggleDelete: PropTypes.func,
  onToggleItem: PropTypes.func,
};

export default List;
