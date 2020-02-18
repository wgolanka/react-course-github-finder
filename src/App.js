import React, {Component} from 'react';
import './App.css';

class App extends Component {

  //lifecycle method, runs at certain point when component is loaded
  //required to return from class
  render() {
    return (
        <div className="App">
          <h1> hello from react</h1>
        </div>
    );
  }
}

export default App;
