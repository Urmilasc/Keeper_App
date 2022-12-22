import React, { useState } from "react";
// import Fab from '@mui/material/Fab';

function CreateArea(props) {
  const [isexpanded, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expandarea() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isexpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onClick={expandarea}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isexpanded ? 3 : 1}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
