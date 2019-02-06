import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './NameForm';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isValid: true, storage: ''};
    this.setName = this.setName.bind(this);
  }

  setName(name) {
    this.setState({storage:name})
  }

  render() {
    return (
      <div>
      {(this.state.storage == '') ?
      <NameForm setName={this.setName} />
      : <p className="incorrect" style={{color:'green'}}>Greetings {this.state.storage}!</p>}
      </div>
    );
  }
}

export default App;
