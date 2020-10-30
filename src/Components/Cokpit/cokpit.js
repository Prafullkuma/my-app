import React, { useEffect } from 'react'
import classes from './cokpit.css'
//componentDidMount componentDidUpdate ComponentWillMount is cause the useEffect runs everytime
//When to use shouldComponentUpdate and React.memo(it create a copy of the fucntional component) using(export default React.memo(className))
//answer=>when we are updating the parent Component(60%)  update then also child component are also get update(60%) then we should not use the Above two methods
//oneMore answer to use PureComponent(class) 
const Cokpit = (props) => {

    useEffect(() => {
        console.log('[Cokpit.js] useEffect')
        //HTTP Request.... combined two method componentDidMount and componentDidUpdate
        const timer = setInterval(() => {
            //  alert('Saved the data to cloud')
        }, 2000);
        return () => {
            clearTimeout(timer)
            console.log("Clicked Cokpit Component")
        }
    }, []);
    useEffect(() => {
        console.log('Cokpit.js 2nd useEffect')
        return () => {
            console.log("Clicked Cokpit 2nd Component")
        }
    })

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.red
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cokpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
        </button>

        </div>)
}
export default Cokpit