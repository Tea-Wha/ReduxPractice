import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function User() {
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const updateName = () => {
    dispatch({ type: "SET_NAME", payload: input });
    setInput("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Name: {name || "No Name"}</h1>
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
