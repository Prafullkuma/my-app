import React from 'react'
import Person from './person'
import '../App.css';
//passing the function as [props]
//passing parameter to the switchhanlder
//recomanded method is bind
class App extends React.Component {
    state = {
        person: [
            { name: 'prafull', age: "34" },
            { name: "google", age: "23" },
            { name: "nisha", age: "43" }
        ]
    }
    switchHandler = (newName) => {  //passing parameter to the handler
        this.setState({
            person: [
                { name: newName, age: "23" },
                { name: 'google', age: "3333333" },
                { name: "niosha", age: "23" }]
        })
    }
    render() {
        return (<div>
            <Person name={this.state.person[0].name}
                age={this.state.person[0].age} />
            <Person name={this.state.person[1].name}
                age={this.state.person[1].age} />
            <Person name={this.state.person[2].name}
                age={this.state.person[2].age}
                click={this.switchHandler.bind(this, 'Semma12133')} /> {/*passing the function as [props]*/}
            <button onClick={this.switchHandler.bind(this, 'Revan')}>switch change</button>
            {/* Below code is inefficient*/}
            <button onClick={() => { this.switchHandler("Maximilian...!!") }}>switch </button>

        </div>)
    }
}
export default App