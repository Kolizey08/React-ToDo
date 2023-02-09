import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  return (
    <div className="todos">
      {props.todos.map((item, index) => {
        return (
          <Todo
            key={index}
            item={item}
            index={index}
            makeFavorite={props.makeFavorite}
            deleteTodo={props.deleteTodo}
          />
        );
      })}
    </div>
  );
}
