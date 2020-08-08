import React from "react";
import "./App.css";
import icon from "./images/react-512.png";
import quiz from "./images/quiz-wo-bg.png";

function App() {
  return (
    <div className="container">
      <h1>REACT JS LEARNING PROJECTS</h1>
      <hr />

      <h1 className="rect-box">Starter</h1>
      <div className="topic">
        <img src={icon} className="App-logo" alt="logo" />
        <img src={icon} className="App-logo" alt="logo" />
        <img src={icon} className="App-logo" alt="logo" />
      </div>

      <h1 className="rect-box">Intermediate</h1>
      <div className="topic">
        <img src={quiz} className="App-logo" alt="logo" />
        <img src={quiz} className="App-logo" alt="logo" />
        <img src={quiz} className="App-logo" alt="logo" />
      </div>

      <h1 className="rect-box">Advanced</h1>
      <div className="topic">
        <p>Topic content goes here</p>
      </div>

      <h1 className="rect-box">Expert</h1>
      <div className="topic">
        <p>Topic content goes here</p>
      </div>
    </div>
  );
}

export default App;
