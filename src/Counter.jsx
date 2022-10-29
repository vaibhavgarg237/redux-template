import React from "react";
import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +
      </button>
      <p>{value}</p>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
