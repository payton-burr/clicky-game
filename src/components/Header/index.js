import React from 'react';
import './style.css';

const NavBar = (props) => {
  return (
    <React.Fragment>
      <header>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Family_Guy_Logo.svg/1200px-Family_Guy_Logo.svg.png" />
        <h3>Clicky Game!</h3>
      </header>
      <section>Score: {props.score} | Top Score: {props.highScore}</section>
    </React.Fragment>
  );
}

export default NavBar;