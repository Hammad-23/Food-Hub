import React from "react";
// import "./button.css"

export default function Button(props) {
  return (
    <>
      <button {...props}>
        {props.icon}
        {props.Text}
      </button>
    </>
  );
}
