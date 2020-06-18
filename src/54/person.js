import React from 'react'
const person = props => {
    return (
        <div className="person">
            <h1 onClick={props.click}> My name is:{props.name} and age:{props.age}</h1>
            <input
                type="text"
                onChange={props.clickeMe}
                value={props.name}
            /><br />
        </div>)
}
export default person;