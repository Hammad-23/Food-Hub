import React from "react";
import "../customButton/button.css";

export default function Button(props) {
  return (
    // <div>
      <button {...props}>
        {props.Text}
        {props.icon}
      </button>
    // {/* </div> */}
  );
}
