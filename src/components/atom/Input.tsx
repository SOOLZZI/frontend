import React from "react";

function Input(props: any) {
  return (
    <div>
      <input
        className="border-b border-solid border-black outline-none w-80"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        id={props.id}
      />
    </div>
  );
}

export default Input;
