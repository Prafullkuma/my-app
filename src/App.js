import React from 'react'
import SeeTa from './AppPractice'
//passsing Paramete to the function
class App extends React.Component {
    state = {
        person: [
            { name: 'Google', age: 23 },
            { name: 'revan', age: 43 },
            { name: "Disha", age: 245 }
        ]
    }
    switchNameHandler = (newName) => {
        this.setState({
            person: [
                { name: newName, age: 45 },
                { name: 'Giia', age: 23 },
                { name: 'nisha', age: 34 }
            ]
        })
    }
    render() {
        return (
            <div >
                {/* <button onClick={this.switchNameHandler.bind(this, "REvan")}>Change</button>*/}
                <SeeTa name={this.state.person[0].name} />
                <SeeTa name={this.state.person[0].name}
                    click={() => this.switchNameHandler('room')} />

            </div>)
    }
}
export default App