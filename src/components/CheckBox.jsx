import Proptypes from "prop-types";

const CheckBox = ({
  absolute,
  onToggleItem,
  setValue,
  value,
  onToggleListItem,
  isChecked,
}) => {
  const handleInput = () => {
    if (onToggleItem != null) {
      onToggleItem();
      setValue("");
    }

    if (onToggleListItem) {
      onToggleListItem();
    }
  };

  return (
    <div
      className={`check-box flex-center cursor ${absolute && "absolute"} ${
        value || isChecked ? "active" : ""
      }`}
      onClick={handleInput}
    >
      {value || isChecked ? (
        <ion-icon name="checkmark-outline"></ion-icon>
      ) : null}
    </div>
  );
};

CheckBox.propTypes = {
  absolute: Proptypes.string,
  onToggleItem: Proptypes.func,
  setValue: Proptypes.func,
  onToggleListItem: Proptypes.func,
  value: Proptypes.string,
  isChecked: Proptypes.bool,
};

export default CheckBox;
