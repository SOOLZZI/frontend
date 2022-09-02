import React from "react";

function Title(props:any) {
  return (
    <h1 className="text-3xl font-bold">{props.children}</h1>
  );
}
export default Title;