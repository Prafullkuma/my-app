import React, { Component } from 'react';
//import Radium, { StyleRoot } from 'radium'
import Person from './person';
import classes1 from '../App.css'
//adding media queries
//modules:true
//localIdentName:'[name]__[local]__[hash:based64:5]'
class App extends Component {
    state = {
        persons: [
            { id: 'asfa1', name: 'Max', age: 28 },
            { id: 'asdf11', name: 'Stephanie', age: 26 },
            { id: 'vasdf1', name: 'Manu', age: 29 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        //we need to update the state which input field we type
        //findIndex element in an array and get the index of the array takes function as argument 
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        //copy of the person object with index
        const person = {
            ...this.state.persons[personIndex]
        };
        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;
        //copy of the person Array with index
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }


    deletePersonHandler = (personIndex) => {
        //when i click on the p tag if it a last then it will conisder as personindex 2 and deleted 
        //if i click on the first p tag then consider as0 pesonindex 
        //again if i click on the first it ll consider as 0
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            //69
            '&:hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            );
            style.backgroundColor = 'red'//67
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }
        /* 68  */
        //let classes = ['red', 'bold'].join(' ');
        const classes = []
        if (this.state.persons.length <= 2) {
            classes.push('red')
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold')
        }
        /* 68  */

        return (
            <div className="App">

                <h1>Hi, I'm a React App</h1>

                {/* 68  */}<p className={classes.join(' ')}>This is really working!</p>
                <button className="button"
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>

        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
