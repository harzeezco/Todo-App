import CheckBox from "./CheckBox";

import PropTypes from "prop-types";

const List = ({
  list: { isChecked, id, value },
  onToggleListItem,
  onToggleItem,
}) => {
  return (
    <li className="list" key={id}>
      <div className={`flex  ${isChecked && "completed"} small-gap`}>
        <CheckBox
          active="active"
          onToggleListItem={onToggleListItem}
          isChecked={isChecked}
        />
        <p>{value}</p>
      </div>
      <span className="cursor" onClick={onToggleItem}>
        X
      </span>
    </li>
  );
};

List.propTypes = {
  list: PropTypes.object,
  onToggleListItem: PropTypes.func,
  onToggleItem: PropTypes.func,
};

export default List;
