import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state ={
      filterString: '',
      dogs: ['Bosley', 'Lily', 'Stanley', 'Molly']
    };
  }
  handleChange(filter) {
    this.setState({filterString: filter});
  }
  render(){
    let dogsToDisplay = this.state.dogs
    .filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h2 key ={index}>{element}</h2>;
    });
    return(
      <div className='App'>
        <input  onChange={e => this.handleChange(e.target.value)}type='text'/>
        {dogsToDisplay}
      </div>
    );
  }
}

export default App;
