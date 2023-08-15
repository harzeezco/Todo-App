import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import ListBox from "./components/ListBox";
import useLocalStorage from "./Hooks/useLocalStorage";

const App = () => {
  const [lists, setLists] = useLocalStorage([]);
  const [isDisplay, setIsDisplay] = useState(true);

  const handleDisplayMode = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <div className={`${isDisplay ? "light" : "dark"} container flex-center`}>
      <div className={`${isDisplay ? "light-mode" : "dark-mode"} mode`}></div>
      <div className="content-wrapper">
        <Header onToggleMode={handleDisplayMode} isDisplay={isDisplay} />
        <main>
          <InputBox setLists={setLists} />
          <ListBox lists={lists} setLists={setLists} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
