import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "./counterSlice";

function Counter() {
  const count = useSelector(selectCount); // useSelector를 사용하여 state 가져오기
  const dispatch = useDispatch(); // dispatch를 통해 action 보내기

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter;
