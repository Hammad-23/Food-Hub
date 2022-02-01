import React from "react";
import "../customButton/button.css";

export default function Button(props) {
  return (
    // <div>
      <button {...props}>
        {props.icon}
        {props.Text}
      </button>
    // {/* </div> */}
  );
}
