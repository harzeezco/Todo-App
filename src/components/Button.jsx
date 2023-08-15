import PropTypes from "prop-types";

const Button = ({
  children,
  onToggleCompletedItem,
  setSortBy,
  sortBy,
  listNum,
}) => {
  const handleToggleCompleted = () => {
    if (onToggleCompletedItem) {
      onToggleCompletedItem();
    }
    if (setSortBy) {
      setSortBy();
    }
  };

  return (
    <>
      <button
        onClick={handleToggleCompleted}
        className={`btn cursor ${sortBy && listNum ? "btn-active" : ""}`}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  sortBy: PropTypes.bool,
  onToggleCompletedItem: PropTypes.func,
  setSortBy: PropTypes.func,
  listNum: PropTypes.number,
};

export default Button;
