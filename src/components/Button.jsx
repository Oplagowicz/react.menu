import React from "react";


function Button({ type, onClick }) {
  return (
    <button className={"nav_text"} onClick={onClick}>
      {type}
    </button>
  );
}

export default Button