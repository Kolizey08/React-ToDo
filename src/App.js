import { useState } from "react";
import Form from "./Form";
import Headar from "./Headar";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Купить бананы",
      favorite: false,
    },
    {
      text: "Выпить стакан воды",
      favorite: true,
    },
    {
      text: "Выучить уроки JavaScript",
      favorite: false,
    },
  ]);

  const [text, setText] = useState("");

  const deleteTodo = (removeIndexItem) => {
    const filtred = todos.filter((item, index) => {
      if (index === removeIndexItem) {
        return false;
      }
      return true;
    });
    setTodos(filtred);
  };

  const makeFavorite = (indexFavorite) => {
    const fevorit = todos.map((item, index) => {
      if (indexFavorite === index) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    setTodos(fevorit);
  };

  const addTodo = () => {
    if (todos.find((item) => item.text === text)) {
      alert("Такое дело уже есть");
      return;
    }
    setTodos([
      {
        text: text,
        favorite: false,
      },
      ...todos,
    ]);
    setText("");
  };
  return (
    <div className="app">
      <Headar />
      <Form text={text} setText={setText} addTodo={addTodo} />
      <Todos
        todos={todos}
        makeFavorite={makeFavorite}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
