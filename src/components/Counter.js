import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux';

const Counter = () => {
  
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();
//
  const incrementHandler = () => {
      dispatch({type: 'INCREMENT'})
  }
  const decrementHandler = () => {
      dispatch({type: 'DECREMENT'})
  }
  const increaseHandler = () => {
    dispatch({type: 'INCREASE',amount: 5})
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'TOGGLE'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        {/* 1 dispatch ты колдонуш учун buttondor.incrementHandler ди в кочество оброботчик события  */}
        <button onClick={incrementHandler}>increment</button>
        {/* 2 */}
        <button onClick={decrementHandler}>decrement</button>
        {/* 3 */}
        <button onClick={increaseHandler}>increase</button>
      </div>
      {/* 4 */}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
