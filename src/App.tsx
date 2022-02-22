import Counter from './bases/Counter';
import CounterBy from './bases/CounterBy';
import CounterEffect from './bases/CounterEffect';
import CounterHook from './bases/CounterHook';
import CounterReducer from './counter-reducer/CounterReducer';
// import CounterReducerComponent from './bases/CounterReducer';

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <CounterBy initialValue={5} />
      <CounterEffect />
      <CounterHook />
      <CounterReducer />
      <hr />
    </>
  );
}

export default App;
