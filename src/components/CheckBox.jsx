import Proptypes from "prop-types";

const CheckBox = ({
  absolute,
  onToggleSubmit,
  value,
  isCompleted,
  onToggleCompleted,
}) => {
  const handleInput = () => {
    if (onToggleSubmit != null) {
      onToggleSubmit();
    }

    if (onToggleCompleted != null) {
      onToggleCompleted();
    }

  };

  return (
    <div
      className={`check-box flex-center cursor ${absolute && "absolute"} ${
        value || isCompleted ? "active" : ""
      }`}
      onClick={handleInput}
    >
      {value || isCompleted ? (
        <ion-icon name="checkmark-outline"></ion-icon>
      ) : null}
    </div>
  );
};

CheckBox.propTypes = {
  absolute: Proptypes.string,
  isCompleted: Proptypes.bool,
  onToggleSubmit: Proptypes.func,
  setValue: Proptypes.func,
  value: Proptypes.string,
  isChecked: Proptypes.bool,
  onToggleCompleted: Proptypes.func,
};

export default CheckBox;
