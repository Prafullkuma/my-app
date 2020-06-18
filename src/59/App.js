import React from 'react'
import Person from './person'
import '../App.css';
//updating state immunity (better option for updating)
//adding key(60)
class App extends React.Component {
    state = {
        person: [
            { id: '12wwds', name: 'prafull', age: "34" },
            { id: '12wwds', name: "google", age: "23" },
            { id: '12wwds', name: "nisha", age: "43" }
        ],
        toggleHandler: false
    }

    deletePersonHanlder = (personIndex) => {
        // const persons = this.state.person.slice()
        const persons = [...this.state.person]
        persons.splice(personIndex, 1)
        this.setState({ person: persons })
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
                    this.state.person.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHanlder(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id} />
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