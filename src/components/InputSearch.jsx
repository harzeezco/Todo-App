import PropTypes from "prop-types";

const InputSearch = ({ value, setValue }) => {

  
  return (
    <input
      value={value}
      className="input"
      placeholder="Create a new todo..."
      type="text"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

InputSearch.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default InputSearch;
