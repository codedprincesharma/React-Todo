import { useState } from "react";
import { nanoid } from "nanoid";
import "./Create.scss"

const Create = (props) => {
  const todos = props.todos;
  const setodos = props.settodos;

  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };

    let copyTodos = [...todos];
    copyTodos.push(newtodo);
    setodos(copyTodos);
    setTitle("");
  };



  return (
    <>
      <h1 >Create Task</h1>
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
        <button >Create Todo</button>
      </form>
    </>
  );
};

export default Create;
