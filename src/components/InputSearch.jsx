import PropTypes from "prop-types";

const InputSearch = ({ todo, onInputChange }) => {

  
  return (
    <input
      value={todo}
      className="input"
      placeholder="Create a new todo..."
      type="text"
      name='todo'
      onChange={(e) => onInputChange(e)}
    />
  );
};

InputSearch.propTypes = {
  todo: PropTypes.string,
  onInputChange: PropTypes.func,
};

export default InputSearch;
