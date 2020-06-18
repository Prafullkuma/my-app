import React from 'react'
const validation = (props) => {
    let TextName = <h1>Text to long</h1>
    if (props.inputLenght <= 5) {
        TextName = <h2>text is to short</h2>
    }
    return (<div>
        {TextName}
    </div>)

}
export default validation