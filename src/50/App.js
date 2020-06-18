import React from 'react'
import Person from './person'
import '../App.css';
//Chaging Dynamically  by provinding input box
class App extends React.Component {
    state = {
        person: [
            { name: 'prafull', age: "34" },
            { name: "google", age: "23" },
            { name: "nisha", age: "43" }
        ]
    }
    switchHandler = (newName) => {
        this.setState({
            person: [
                { name: newName, age: "23" },
                { name: 'google', age: "3333333" },
                { name: "niosha", age: "23" }]
        })
    }
    newNameHandler = (event) => {
        this.setState({
            person: [{ name: 'maximus', age: "23" },
            { name: event.target.value, age: "3333333" },
            { name: "niosha", age: "23" }]
        })
    }
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        return (<div>
            <Person name={this.state.person[0].name}
                age={this.state.person[0].age} />
            {/* changing Dynamically ----------*/}
            <Person name={this.state.person[1].name}
                clickeMe={this.newNameHandler}
                age={this.state.person[1].age} />
            {/* changing Dynamically ----------*/}

            <Person name={this.state.person[2].name}
                age={this.state.person[2].age}
                click={this.switchHandler.bind(this, 'Semma12133')} />
            <button style={style} onClick={this.switchHandler.bind(this, 'Revan')}>switch change</button>


        </div>)
    }
}
export default App