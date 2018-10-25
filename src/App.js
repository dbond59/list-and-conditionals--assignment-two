import React, { Component } from 'react';
import './App.css';



class App extends Component {
  
  lengthOfTextHandler = (event) => {
  const textlength = event.target.value;

  return textlength;

}
  render() {
    return (
      <div>
        <input type='text' onChange={this.lengthOfTextHandler}></input>
        <p>{this.lengthOfTextHandler.textlength.length}</p>
      </div>
    )
  }
}

export default App;
