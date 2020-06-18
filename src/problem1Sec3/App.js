import React from 'react'
import Userinput from './userInput'
import Useroutput from './userOutput'
class App extends React.Component {
    state = {
        userName: "SuperMAx"
    }
    userChangeHandle = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    render() {

        return (<div>
            <Userinput changed={this.userChangeHandle} currentName={this.state.userName} />
            <Useroutput userName={this.state.userName} />
            <Useroutput userName={this.state.userName} />
            <Useroutput userName="Max" />
        </div>)
    }
}
export default App