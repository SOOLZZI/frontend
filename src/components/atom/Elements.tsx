import React from "react";

function elements(props:any) {
  return (
    <h1 className="font-semibold">{props.children}</h1>
  );
}
export default elements;