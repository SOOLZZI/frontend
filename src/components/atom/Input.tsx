import React from "react";

function Input(props: any) {
  return (
    <div>
      <input
        className="border-none rounded-2xl w-80 p-2 
      text-base font-semibold outline-1 outline-[#cdcdcd]"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        id={props.id}
      />
    </div>
  );
}

export default Input;
