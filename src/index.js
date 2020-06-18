import React from 'react'
import ReactDOM from 'react-dom'
import App from './70/App'
import './App.css'
function Clock() {
  return (<div className="App">
    <h1>My react App</h1>
    <App />
  </div>)
}

ReactDOM.render(<Clock />, document.getElementById('root'))