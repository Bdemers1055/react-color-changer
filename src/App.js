import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'red'
    };
  }
  changeColorGreen(){
    this.setState({
      color: 'green'
    });
  }
  changeColorRed(){
    this.setState({
      color: 'red'
    });
  }
  render() {
    const styles = { backgroundColor: this.state.color }
    return (
      <div className = "center" >
      <div className = "box" style = {styles} >
      </div>
      <button className = "left" onClick={ this.changeColorGreen.bind(this) }>Green</button>
      <button className = "right" onClick={ this.changeColorRed.bind(this) }>Red</button>      
      </div>
    );
  }
}

export default App;
