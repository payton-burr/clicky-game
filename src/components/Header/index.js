import React from 'react';
import './style.css';

const NavBar = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <header>
        <h2>Family Guy! : Clicky Game</h2>
      </header>
      <section>Score: {props.score} | Top Score: {props.highScore}</section>
    </React.Fragment>
  );
}

export default NavBar;