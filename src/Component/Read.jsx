const Read = (props) => {
  const todos = props.todos;

  const renderTodos = todos.map((todo) => {
    const deleteHandler = (id) => {
      console.log(id);
    };

    return (
      <li key={todo.id}>
        {todo.title} | <span onClick={deleteHandler(todo.id)}>Delete</span>
      </li>
    );
  });
  return (
    <>
      <h1>Pending Todos</h1>
      <ol>{renderTodos}</ol>
    </>
  );
};

export default Read;
