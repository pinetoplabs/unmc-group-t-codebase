import React from "react";
import { forwardRef } from "react";

function Headline({ text }, ref) {
  return <h1 ref={ref}>{text}</h1>;
}
export default forwardRef(Headline);
