import { useState } from "react";

export function Settings() {
  const [count, setCount] = useState(0);

  return (
    <div className="container p-4 bg-blue-100 border-2 border-blue-400 rounded-b-lg">
      <div className="grid grid-cols-1 p-12 gap-x-6 gap-y-10 lg:grid-cols-3 ">
        <h3 className="text-blue-800 text-xl text-center">Настройки</h3>
        <button
          className="p-4 bg-indigo-500 hover:bg-indigo-700 text-indigo-50 rounded-lg border-8 border-double border-purple-200"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Нажми на меня
        </button>
        <p className="p-8 text-indigo-500 bg-purple-200 rounded-lg border-indigo-500 border-4 border-double">
          Количество кликов: {count}
        </p>
      </div>
    </div>
  );
}
