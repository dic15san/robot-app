import React from 'react';
import './App.css';
import Button from './Button';

class App extends React.Component {
  state = {
    inputValue: ''
  }

  handleClick = () => {
    console.log('click');
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  render(){
  return (
    <div className="App">
      <input type="text" name="input" onChange={this.handleChange} />
      <Button />
    </div>
  );
  }
}

export default App;
