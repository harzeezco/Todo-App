// import React from "react";
import { memo, useState } from "react";
import ListFooter from "./ListFooter";

import PropTypes from "prop-types";
import List from "./List";

const ListBox = memo(({ lists, setLists }) => {
  const [sortBy, setSortBy] = useState("All");

  const handletoggleItem = (id) => {
    setLists((prevList) =>
      prevList.map((list) => {
        return list.id === id ? { ...list, isChecked: !list.isChecked } : list;
      })
    );
  };

  const handeleteitem = (id) => {
    setLists((prevList) => prevList.filter((list) => list.id !== id));
  };

  const handleClearCompletedItem = () => {
    setLists((prevList) =>
      prevList.filter((list) => {
        return list.isChecked ? null : list;
      })
    );
  };

  let sortedItem;

  if (sortBy === "All") sortedItem = lists;

  if (sortBy === "Completed")
    sortedItem = lists
      .slice()
      .sort((a, b) => Number(b.isChecked) - Number(a.isChecked));

  if (sortBy === "Active")
    sortedItem = lists
      .slice()
      .sort((a, b) => Number(!b.isChecked) - Number(!a.isChecked));

  const listNum = lists && lists.length;

  return (
    <div className="items-box">
      <ul>
        {sortedItem.map((list) => {
          const { id } = list;

          return (
            <List
              key={id}
              list={list}
              onToggleListItem={() => handletoggleItem(id)}
              onToggleItem={() => handeleteitem(id)}
            />
          );
        })}
      </ul>

      <ListFooter
        listNum={listNum}
        onToggleCompletedItem={handleClearCompletedItem}
        setSortBy={setSortBy}
        sortBy={sortBy}
      />
    </div>
  );
});

ListBox.displayName = "ListBox";

ListBox.propTypes = {
  lists: PropTypes.array,
  setLists: PropTypes.func,
};

export default ListBox;
