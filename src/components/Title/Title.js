import React from "react";
import "./Title.css";

const Title = props => (<div>
  <nav className="navbar navbar-dark bg-dark">
    <div className="fluid">
      <div className="navbar-header">
    <ul>
      <li className="navbar-brand">Pik Pik Game</li>
      <li className="scores pullRight">Current Score: {props.currentScore}
        | Highest Score: {props.topScore}
      </li>
    </ul>
    </div>
    </div>
  </nav>
  <div className="title">{props.children}</div>



</div>);

export default Title;
