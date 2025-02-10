import React from "react"

function TodoItem(props) {
  return (
    <div className="flex flex-col items-center space-y-3 mt-5">
      {props.tasks.map((item, index) => (
        <div
          key={index}
          className="flex items-center w-96 border-b border-gray-400 py-2"
        >
          <input type="checkbox" className="w-5 h-5 mr-3" />
          <p className="text-lg text-gray-800">{item.task}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoItem
