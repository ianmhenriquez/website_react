import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  render() {
    Axios({
      method: "GET",
      url: "http://localhost:3010/testAPI",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      this.setState({ apiResponse: res.data })
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload bruh git.
          </p>
          <p className="App-intro">{this.state.apiResponse}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  };
}

export default App;