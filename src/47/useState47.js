import React, { useState } from 'react'
import Person from './App47'
//statefull component
const App = props => {
    const [personState, setPersonstate] = useState({
        person:
            [{ name: "prafull", age: "32" },
            { name: "Google", age: "34" },
            { name: "Nisha", age: "34" }
            ],
        otherState: 'this is new thing'
    })
    const switchHandler = () => {
        setPersonstate({
            person: [
                ...person
            ],
            otherState: personState.otherState
        })

    }
    const secondUseState = useState("change the")
    console.log(secondUseState)
    return (
        <div>
            <Person name={personState.person[0].name} age="34" />
            <Person name={personState.person[1].name} age="67" />
            <Person name={personState.person[2].name} age="12" />
            <button onClick={switchHandler}>Changeing</button>
        </div>)
}
export default App