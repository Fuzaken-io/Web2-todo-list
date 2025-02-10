import React from "react"

function Button(props) {
  return (
    <div className="flex justify-center items-center flex-row w-96 mt-4 ml-170">
      <button className="px-6 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-md mr-3">
        {props.add}
      </button>
      <button className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded-md">
        {props.del}
      </button>
    </div>
  );
}

export default Button
