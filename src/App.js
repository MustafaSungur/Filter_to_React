import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const inputHandle = (e) => {
    e.preventDefault();
    console.log(e);
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div className="w-10/12 mx-auto h-full absolute top-1/4 text-neutral-200  left-1/3 font-open">
      {/* input */}

      <form onSubmit={inputHandle} className="group flex">
        <input
          className=" w-80  border-b-2 transition duration-300 border-y-red-700  outline-none  focus:border-b-emerald-600  bg-transparent"
          placeholder="Ara / Ekle"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={inputHandle}
          className="ml-2 px-4 transition duration-300 bg-orange-600 rounded hover:bg-emerald-600"
          disabled={!todo}
        >
          Ekle
        </button>
      </form>
      <ul
        className={
          !todos === []
            ? "border-none"
            : "group space-y-2 mt-4 border w-fit p-6 rounded border-orange-500 text-zinc-400"
        }
      >
        {todos.map((data, index) => (
          <li key={index} className=" list-item  ">
            {index + 1}) {data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
