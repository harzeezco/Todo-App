import { useState } from "react";
import CheckBox from "./CheckBox";
import InputSearch from "./InputSearch";

import PropTypes from "prop-types";

const InputBox = ({ setLists }) => {
  const [value, setValue] = useState("");

  const handleItem = () => {
    if (!value) {
      return;
    }
    const id = Date.now();
    const newItems = { value, isChecked: false, id };
    setLists((prevLists) => [...prevLists, newItems]);
  };

  return (
    <section className="input-box">
      <CheckBox
        absolute="absolute"
        onToggleItem={handleItem}
        setValue={setValue}
        value={value}
      />
      <InputSearch value={value} setValue={setValue} />
    </section>
  );
};

InputBox.propTypes = {
  setLists: PropTypes.func,
};

export default InputBox;
