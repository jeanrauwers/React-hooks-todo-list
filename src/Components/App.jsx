import React, { useState, useEffect, useRef } from "react";
import "../SCSS/App.scss";
import Note from "./Note";

const App = () => {
  const [isEditing, setEditing] = useState(false);
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
  }, [isEditing]);

  const updateNoteText = event => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const addTask = () => {
    if (!inputValue.replace(/\s/, "").length) {
      return;
    }

    const newNotesArray = [...notes, inputValue];
    setNotes(newNotesArray);
    setInputValue("");
  };

  const deleteTask = index => {
    const notesArray = [...notes];
    notesArray.splice(index, 1);
    setNotes(notesArray);
  };

  return (
    <>
      <div className="header">React Hooks - TODO List Tutorial</div>
      <div className="container">
        <div className="btn" onClick={addTask}>
          +
        </div>
        <input
          ref={inputRef}
          type="text"
          className="textInput"
          value={inputValue}
          onChange={updateNoteText}
          onKeyPress={handleKeyPress}
        />
        {notes.map((item, index) => (
          <Note
            item={item}
            onClick={() => deleteTask(index)}
            key={`task${index}`}
          />
        ))}
      </div>
    </>
  );
};

export default App;
