import "./App.css";
import Sidebar from "./components/sidebar";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    //ローカルストレージにnotesを保存する
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (notes.length !== 0) {
      setActiveNote(notes[0].id);
    }
  }, []);

  const onAddNote = () => {
    console.log("新しくノートが追加されました");
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onUpdateNote = (updatedNote) => {
    //修正された新しいノートの配列を返す
    const updateNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(updateNotesArray);
  };

  const onDeleteNote = (id) => {
    console.log();
    const FilterNotes = notes.filter((note) => note.id !== id);
    setNotes(FilterNotes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
