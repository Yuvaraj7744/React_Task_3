import { useEffect, useState, useRef } from "react";

const PreviousValue = () => {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    previousCount.current = count;
  }, [count]);
  return (
    <>
      <h1>Current Value:{count}</h1>
      <h1>Previous Value:{previousCount.current}</h1>

      <button onClick={handleIncrement}> Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export default PreviousValue;
