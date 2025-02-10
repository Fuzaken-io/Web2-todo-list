import React from "react"

function Header(props) {
  return (
    <div className="flex justify-center items-center mt-10">
      <p className="font-bold text-3xl text-black-800">{props.title}</p>
    </div>
  );
}

export default Header
