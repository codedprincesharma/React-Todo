import { nanoid } from "nanoid";
import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([
    { id: 1, title: "kaam kar le bhai", isCompleted: false },
  ]);

  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };

    let copyTodos = [...todo];
    copyTodos.push(newtodo);
    setTodo(copyTodos);
  };

  const renderTodos = todo.map(todo => {
    return <li key={todo.id}>{todo.title}</li>;
  });

  return (
    <div>
      <h1>Create Task</h1>
      <form action="" onSubmit={submitHandler}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <br />
        <br />
        <button>Create Todo</button>
      </form>
      <hr />
      <h1>Pending Todos</h1>
      <ol>{renderTodos}</ol>
    </div>
  );
}

export default Todo;
