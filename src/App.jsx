import { useState } from "react";
import Create from "./Component/Create";
import Read from "./Component/Read";

function Todo() {
  const [todo, setTodo] = useState([
    { id: 1, title: "kaam kar le bhai", isCompleted: false },
  ]);

  return (
    <>
      <Create todos={todo} settodos={setTodo} />
      <Read todos={todo} settodos={setTodo} />
    </>
  );
}

export default Todo;
