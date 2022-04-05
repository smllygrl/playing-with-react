import { useState } from "react";

const Counter = () => {
  //  in parenthesis of useState is default value
  // first value is state (getter)
  // second value is function (setter)
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count === 0) {
      console.log("Counter cannot go below 0");
    } else {
      setCount((previousCount) => previousCount - 1);
    }
  };

  const incrementCount = () => {
    console.log("Increment pressed");
    setCount((previousCount) => previousCount + 1);
    if (count === 9) {
      console.log("It's 10");
    }
  };

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <div>{count}</div>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default Counter;
