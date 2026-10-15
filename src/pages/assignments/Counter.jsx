import React from "react";
import { UseStateCounter } from "../../components/UseStateCounter";
import UseReducerCounter from "../../components/UseReducerCounter";
const Counter = () => {
  return (
    <div>
      <UseStateCounter></UseStateCounter>
      <UseReducerCounter></UseReducerCounter>
    </div>
  );
};

export default Counter;