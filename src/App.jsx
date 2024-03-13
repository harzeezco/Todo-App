import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import ListBox from "./components/ListBox";

export const SERVERURL = import.meta.env.VITE_SERVER_URL

const App = () => {
  const [lists, setLists] = useState({
    todo: '',
    isChecked: false
  });
  const [isDisplay, setIsDisplay] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [update, setUpdate] = useState(false);
  const [updateID, setUpdateID] = useState('');

  const handleDisplayMode = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <div className={`${isDisplay ? "light" : "dark"} container flex-center`}>
      <div className={`${isDisplay ? "light-mode" : "dark-mode"} mode`}></div>
      <div className="content-wrapper">
        <Header onToggleMode={handleDisplayMode} isDisplay={isDisplay} />
        <main>
          <InputBox setLists={setLists} setUpdate={setUpdate} update={update} lists={lists} setRefresh={setRefresh}  updateID={updateID} />
          <ListBox refresh={refresh}  setRefresh={setRefresh} setLists={setLists} lists={lists} setUpdate={setUpdate} setUpdateID={setUpdateID} />
        </main>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
