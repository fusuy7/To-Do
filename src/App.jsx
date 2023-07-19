import { useState } from "react";
import List from "./components/list";

function App() {
  const [items, setItems] = useState([]);

  function addItem() {
    let item = document.getElementById("input").value;
    setItems([...items, item]);
  }

  return (
    <div className="">
      <h1 className="flex justify-center mb-6 font-mono text-6xl px-3 py-2 rounded-lg text-slate-400 font-bold bg-slate-800 border-[0.5px]">
        To-Do List
      </h1>
      <div className="flex items-center justify-center mb-6">
        <input
          type="text"
          id="input"
          className="border-[0.5px] w-80 font-mono text-slate-300 text-xl rounded-lg p-1 pl-2 bg-slate-600"
        ></input>
        <button onClick={addItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 outline outline-transparent hover:outline-1 hover:outline-slate-400 hover:bg-green-900 bg-green-800 rounded-lg text-white ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      <List items={items} setItems={setItems} />
    </div>
  );
}

export default App;
