import "./App.css";
import Sidebar from "./components/sidebar";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const onAddNote = () => {
    console.log("新しくノートが追加されました");
    const newNote = {
      id: 1,
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes(newNote);
    console.log(notes);
  };
  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} />
      <Main />
    </div>
  );
}

export default App;
