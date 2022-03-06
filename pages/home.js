import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/store/CounterSlice/index';

const Home = () => {
    const dispatch = useDispatch();
    const counter = useSelector( state => state.counter );

    const increment = () => {
        dispatch( actions.increment() );
    }

    const decrement = () => {
        dispatch( actions.decrement() );
    }

    const incrementBy = ( incrementValue ) => {
        dispatch( actions.incrementBy( incrementValue ) );
    }

    const reset = () => {
        dispatch( actions.reset() );
    }

    return (
        <div style={{margin:"5rem"}}>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={() => incrementBy( 5 )}>+5</button>
            <button onClick={reset}>RESETEAR</button>
        </div>
    );
}

export default Home