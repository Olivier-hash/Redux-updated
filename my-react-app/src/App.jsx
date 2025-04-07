// inside the terminal: npm install redux react-redux
// useSelector: A React-Redux hook used to read values from the Redux store.
// useDispatch: A React-Redux hook used to send actions to the Redux store (to update state).
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/counter';

function App() {
  const { count } =useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment() )}>Increment+</button>
        <button onClick={() => dispatch(decrement() )}>Decrement-</button>
    </>
  );
}

export default App
