import { useReducer } from 'react';

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

// estado inicial del reducer
const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: 'increaseBy'; payload: { value: number } }
  | { type: 'reset' };

export const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };

    case 'increaseBy':
      return {
        ...state,
        changes: state.changes + 1,
        previous: state.counter,
        counter: action.payload.value + state.counter,
      };

    default:
      return state;
  }
};

const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const increaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };

  return (
    <>
      <h1>Counter Reducer: {state.counter}</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default CounterReducerComponent;
