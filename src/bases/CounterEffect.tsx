import { useEffect, useState } from 'react';

const MAXIMUN_COUNT: number = 10;

const CounterEffect = () => {
  const [counter, setCounter] = useState<number>(5);

  const handleClick = () => {
    // if (counter < MAXIMUN_COUNT) {
    //   setCounter((prev) => prev + 1);
    // }

    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    // condicional para ejecutar las accion
    if (counter < 10) return;
    console.log('%cSe llego al valor maximo', 'color: red');
  }, [counter]);

  return (
    <>
      <h1>CounterEffect: {counter}</h1>

      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterEffect;
