import { CounterAction } from '../actions/actions';
import { CounterState } from '../interfaces/interfaces';

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
