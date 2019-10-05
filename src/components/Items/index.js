import React from 'react';

const Item = (props) => {
  return (
    <div>
    <img 
      src={props.image}
      alt={props.name} 
      onClick={() => props.handleChange(props.id)}
      />
    </div>
  )
}

export default Item;