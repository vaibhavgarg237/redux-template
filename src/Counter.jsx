import React from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  // const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const { c, vaibhav } = useSelector((state) => state.counterReducers);

  return (
    <div>
      <button
        onClick={() => {
          // setValue(value + 1);
          dispatch({
            type: "increment",
          });
        }}
      >
        +
      </button>
      <p>{c}</p>
      <p>{vaibhav}</p>
      <button
        onClick={() => {
          // setValue(value - 1);
          dispatch({
            type: "incrementbyVal",
            payload: 5,
          });
        }}
      >
        +Val
      </button>
    </div>
  );
}

export default Counter;
