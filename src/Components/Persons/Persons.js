import React from 'react'
import Person from './person/person'
//LifeCycle methods for the props changes
class Persons extends React.Component {
    //first state
    static getDerivedStateFromProps(props, state) {
        console.log('{person} getDerivedStateFromProps', props)
        return state;
    }
    //second state  we have to return true or false
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[persons.js]shoudlComponentUpdate', nextProps)
        if (nextProps.persons !== this.props.persons) {

            return true
        }
        return false
    }
    //third state 
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[persons.js getSnapshotBeforeUpdate')
        return { messgae: 'Messages are Done..!' }
    }
    //6th component

    componentDidUpdate() {

        console.log('[Persons.js]ComponentDidMount')
    }
    componentWillUnmount() {
        console.log('Persons.js componentWillUnmount')
    }
    render() {
        //fourth
        console.log('Persons.js rendering')
        return this.props.persons.map((person, index) => {
            return (<div>
                {/*  fifth Child component*/}
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={event => this.props.changed(event, person.id)
                    }
                />
            </div>)
        })

    }
}
export default Persons