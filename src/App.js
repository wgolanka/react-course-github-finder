import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {

    //lifecycle method, runs at certain point when component is loaded
    //required to return from class
    render() {
        return (
            <div className="App">
                <Navbar/>
                <div className="container">
                    <Users/>
                </div>
            </div>
        );
    }
}

export default App;
