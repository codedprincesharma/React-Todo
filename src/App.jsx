import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([
    { id: 1, title: "kaam kar le bhai", isCompleted: false },
  ]);

  const [title, setTitle] = useState("");
  const [Check, setCheck] = useState(true);
  const [gender, setgender] = useState("male");
  const [city, setcity] = useState("jamui")
  return (
    <div>
      <h1>Create Task</h1>
      <form action="">
        <input
          onChange={(e) => title.log(e.target.value)}
          value={setTitle}
          type="text"
          placeholder="title"
        />
        <br />
        <br />
        <input
          checked={Check}
          onChange={(e) => setCheck.log(e.target.checked)}
          type="checkbox"
          name=""
          id=""
        />
        Completed <br />
        <br />
        <button>Create Todo</button>
        <input
          value="male"
          onChange={(e) => setgender(e.target.value)}
          checked={gender == "male" && true}
          type="radio"
        />
        male
        <br />
        <input
          value="female"
          onChange={(e) => setgender(e.target.value)}
          checked={gender == "female" && true}
          type="radio"
        />
        Female
        <br />
        <br />
        <select  value={city} onChange={(e) => setcity(e.target.value)}>
          <option value="haldia">Haldia</option>
          <option value="jamui">Jamui</option>
          <option value="patna">Patna</option>
        </select>
      </form>
    </div>
  );
}

export default Todo;
