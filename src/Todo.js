import React from "react";

export default function Todo(props) {
  return (
    <div className={`todo ${props.item.favorite ? "selected" : ""}`}>
      <div className="favorite">
        <button onClick={() => props.makeFavorite(props.index)}>⭐️</button>
      </div>
      <div className="todo-text">{props.item.text}</div>
      <div className="actions">
        <button onClick={() => props.deleteTodo(props.index)}>❌</button>
      </div>
    </div>
  );
}
