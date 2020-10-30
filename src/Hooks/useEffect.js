import React, { useState, useEffect } from 'react'
//it Combines the ComponentDidMount ComponentDidUpdate ComponentWillMount
const Effect = () => {
    const [showCount, setCounter] = useState(0)
    useEffect(() => {
        document.title = `you clicked${showCount} times`
    })
    return (<div>
        <button onClick={() => setCounter(showCount + 1)}>Click {showCount} times</button>
    </div>)
}
export default Effect
//useEffect take an argument as Function which will execute the  after the every render method component