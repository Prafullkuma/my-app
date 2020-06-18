import React from 'react'
import Validation from './validation/validation'
import Char from './Char/char'
class App extends React.Component {
    state = {
        userInput: ''
    }
    inputChangeHanlder = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }
    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('')
        text.splice(index, 1);
        const updatedText = text.join('')
        this.setState({ userInput: updatedText })
    }
    render() {
        const CharList = this.state.userInput.split('').map((ch, index) => {
            return <Char name={ch} key={index} clicked={() => this.deleteCharHandler(index)} />
        })
        return (
            <div>
                <input type="text" onChange={this.inputChangeHanlder} />
                <p>{this.state.userInput}</p>
                <Validation inputLenght={this.state.userInput.length} />
                {CharList}
            </div>)
    }
}
export default App
