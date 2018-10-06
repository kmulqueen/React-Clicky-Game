import React from "react";
import "./Nav.css";
const Nav = props => (
    <nav>
        <ul>
            <li className="brand">
                <a href="/clicky-game/">{props.title}</a>
            </li>
            <li id="correct-incorrect">{props.correctIncorrect}</li>
            <li className="alignRight">Score - Top: {props.topScore} | Current: {props.score}</li>
        </ul>
    </nav>
);

export default Nav;