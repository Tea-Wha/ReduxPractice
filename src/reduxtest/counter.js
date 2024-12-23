import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, selectCount} from "./counterSlice";

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter;
