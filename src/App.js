import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  render(){
  return (
    <div className="App"> 
      <h2 className="text-center">BUDGET APP</h2>
      <Form />
      
    </div>
  );
}
}
export default App;
