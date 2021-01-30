import React, { Component } from 'react';
import UserInput from './Users/UserInput';
import UserOutput from './Users/UserOutput';
import './App.css';

class App extends Component {
  state= {
    userName: "Marso"
  }

  eventHandler = (event) => {
    this.setState({
      userName: event.target.value 
    });
  }
  render() {
    const style = {
      color:"green",
      fontFamily: "serif"

    }
    return (
      <div className="App">
        <h1 style={style}>My First React App</h1>
        <UserInput currentName = {this.state.userName} changeName={this.eventHandler}/>
        <UserOutput  userName={this.state.userName} />
      
      </div>
    );
  }
}

export default App;
