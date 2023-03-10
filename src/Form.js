import React from "react";

export default function Form(props) {
  return (
    <div className="form">
      <input
        placeholder="Ведите текст"
        type="text"
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      />
      <button onClick={props.addTodo}>добавить</button>
    </div>
  );
}
