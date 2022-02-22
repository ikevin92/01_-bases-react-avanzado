// tipo para las actions del reduce
export type CounterAction =
  | { type: 'increaseBy'; payload: { value: number } }
  | { type: 'reset' };
