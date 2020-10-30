import React from 'react'
const person = props => {
    return (
        <>
            <h1 onClick={props.click}>My name is   {props.name} and age is{props.age}</h1>
        </>)

}
export default person;