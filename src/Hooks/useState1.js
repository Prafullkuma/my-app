import React, { useState } from 'react'
function Hooks() {
    const [count, setCounter] = useState(0)
    return (<div>
        <h1>Counter:{count}</h1>
        <button onClick={() => setCounter(count + 1)}>counter</button>
    </div>)
}
export default Hooks