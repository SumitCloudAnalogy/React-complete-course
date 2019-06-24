import React from 'react';
import classes from './Person.css';

const person = (props) => {
    const rnd = Math.random();
    if(rnd > 0.7) {
        throw new  Error('Something went wrong');
    }
  return (

      <div className={classes.Person}>
          <p onClick={props.click}>{props.name} and {props.age}</p>
          <p>{props.children}</p>
          <input type="text" onChange={props.changed} value={props.name} />
      </div>
  )
};
export default person;

