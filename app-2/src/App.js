import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      pizza:['hot chicken', 'pickles', 'ranch', 'cheese', 'sauce']
    };
  }
  render() {
let pizzaToDisplay = this.state.pizza.map((element, index) => {
  return <h2 key={index}>{element}</h2>
});
return <div className='App'>{pizzaToDisplay}</div>;
  }
}

export default App;
