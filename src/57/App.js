import React from 'react'
import Person from './person'
import '../App.css';
//outputing list
class App extends React.Component {
    state = {
        person: [
            { name: 'prafull', age: "34" },
            { name: "google", age: "23" },
            { name: "nisha", age: "43" }
        ],
        toggleHandler: false
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
    toggleHandler = () => {
        const doesShow = this.state.toggleHandler
        this.setState({ toggleHandler: !doesShow })
    }
    render() {
        //Note :when a browser update or render something not only the return method calls it also calls render method too
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        let person = null
        if (this.state.toggleHandler) {
            person = (<div>
                {
                    this.state.person.map(person => {
                        return <Person name={person.name} age={person.age} />
                    })
                }
            </div>
            )
        }
        return (

            <div>
                <button style={style} onClick={this.toggleHandler}>Toggle handler</button>
                {person}
            </div>)
    }
}
export default App