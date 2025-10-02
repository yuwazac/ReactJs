import { useState, useReducer } from "react";


const counterA = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 }; 
    default:
      return state;
  }
};


const counterB = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 }; 
    default:
      return state;
  }
};

const CountReducer = () => {
  const initialState = { count: 0 };


  const [state, dispatch] = useReducer(counterA, initialState);


  const [current, dispatch1] = useReducer(counterB, initialState);


  const handleReset = () => {
    dispatch({ type: 'reset' });
    dispatch1({ type: 'reset' });
  };

  return (
    <div>
      <h1>Double Counter</h1>

      <h4>Counter A: {state.count}</h4><br />
      <button onClick={() => dispatch({ type: 'decrement' })}>-A</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+A</button>

      <h4>Counter B: {current.count}</h4>
      <button onClick={() => dispatch1({ type: 'decrement' })}>-B</button>
      <button onClick={() => dispatch1({ type: 'increment' })}>+B</button><br />

      <button onClick={handleReset}>Reset Both</button>
    </div>
  );
};

export default CountReducer;
