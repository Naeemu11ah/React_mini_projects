import React, { useState } from "react";
import "./counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  let increase = () => {
    setCount(count + 1);
  };
  let reset = () => {
    setCount(0);
  };

  return (
    <div id="container">
      <h1 className="text-3xl font-bold">Counter</h1>
      <p id="p">{count}</p>
      <div>
        <button id="reset" onClick={reset}>
          Reset
        </button>
        <button id="increase" onClick={increase}>
          Increase
        </button>
      </div>
    </div>
  );
}
