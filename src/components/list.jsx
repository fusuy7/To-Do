export default function List({ items, setItems }) {
  function removeItem(i) {
    const updatedItems = items.filter((_, index) => index !== i);
    setItems(updatedItems);
  }

  return (
    <ul className="border-[0.5px] bg-gradient-to-r from-transparent from-75% to-slate-950 to-90% border-slate-600 rounded-lg divide-y divide-slate-800">
      {items.map((item, i) => (
        <li
          key={i}
          id={i}
          className="font-mono text-lg break-all text-white px-3 py-2 flex justify-between outline outline-transparent hover:outline-1 hover:outline-slate-500 rounded-lg items-center"
        >
          <p>{item}</p>
          <button onClick={() => removeItem(i)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-eraser-fill rounded-lg w-8 h-8 border-[3px] ml-3 border-transparent bg-red-600 text-white outline outline-transparent hover:outline-1 hover:outline-slate-400 hover:bg-red-700"
              viewBox="0 0 16 16"
            >
              <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}
