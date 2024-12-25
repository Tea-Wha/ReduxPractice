import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./reduxtest/counter";
import User from "./reduxtest/user";
import Users from "./reduxtest/users";
import Api from "./reduxtest/api";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <User />
        <Users />
        <Api />
      </header>
    </div>
  );
}

export default App;
