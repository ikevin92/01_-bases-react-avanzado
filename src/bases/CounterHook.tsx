import { useCounter } from '../hooks/useCounter';

const CounterHook = () => {
  //hook personalizado
  const { handleClick, counter, elementToAnimate } = useCounter({
    maxCount: 15,
  });

  return (
    <>
      <h1>CounterHook: </h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterHook;
