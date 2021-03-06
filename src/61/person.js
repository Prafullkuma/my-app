import React from 'react'
import Radium from 'radium'
const person = props => {
    return (
        <div className="person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <br />
        </div>)

}
export default Radium(person);

