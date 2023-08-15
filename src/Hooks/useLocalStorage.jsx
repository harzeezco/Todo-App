import { useEffect, useState } from "react";

const useLocalStorage = ({innitialState}) => {
  const [lists, setLists] = useState(() => {
    const storageItem = localStorage.getItem("item");

    return storageItem ? JSON.parse(storageItem) : innitialState;
  });

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(lists));
  }, [lists]);

  return [lists, setLists];
};

export default useLocalStorage;
