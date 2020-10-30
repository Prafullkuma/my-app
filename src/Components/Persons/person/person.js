import React from 'react';
//import classes from './person.css';
import Aux from '../../../HOC/Aux'
import PropType from 'prop-types'
import Persons from '../Persons';
class Person extends React.Component {
    render() {
        console.log('person.js rendering')
        return (
            <Aux>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }
}
Person.propTypes = {
    click: PropType.func,
    name: PropType.string,
    age: PropType.number,
    changed: PropType.func
}
export default Person;