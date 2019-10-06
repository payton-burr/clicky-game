import React from 'react';
import './style.css';

const Item = (props) => {
  return (
    <img
      className="img__items" 
      src={props.image}
      alt={props.name} 
      onClick={() => props.handleChange(props.id)}
      />
  )
}

export default Item;