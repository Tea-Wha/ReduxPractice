import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_name, selectName } from "./userSlice";

function User() {
  const name = useSelector(selectName);
  const dispatch = useDispatch();
  const [input, setInput] = useState(""); // React 로컬 사용

  const updateName = () => {
    dispatch(set_name(input));
    setInput("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Name: {name}</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={updateName}>Set Name</button>
    </div>
  );
}

export default User;
