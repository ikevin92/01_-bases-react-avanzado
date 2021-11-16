import { useState } from 'react';

const CounterReducerComponent = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>Counter Reducer: {counter}</h1>

      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterReducerComponent;
