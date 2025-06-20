import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button
      // onClick={() => {
      //   setCount(count + 1);
      //   setCount(count + 1);
      //   //overall output is 1 not 2
      //   // const state=[0,]
      // }}

      // onClick={() => {
      //   setCount((prev) => prev + 1);
      //   setCount((prev) => prev + 1);
      //   //overall output is 2
      //   // const state=[0,]
      // }}
      >
        counter
      </button>
    </div>
  );
};

export default Count;
