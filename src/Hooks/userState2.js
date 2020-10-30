import React, { useState } from 'react'
function Hookes() {
    const initialCount = 0
    const [count, setCounter] = useState(0)
    const incrementFive = () => {
        for (let i = 1; i <= 5; i++) {
            setCounter(count + i)
        }
    }
    return (
        <div>
            {count < 0 ? <h1> Values must be positive</h1> : <h1>counter:{count}</h1>}
            <button onClick={() => setCounter(initialCount)}>reset</button>
            <button onClick={() => setCounter(count + 1)}>Increment</button>
            <button onClick={() => setCounter(count - 1)}>Decrement</button>
            <button onClick={incrementFive}>Incremenet Five</button>
        </div >
    )

}
export default Hookes