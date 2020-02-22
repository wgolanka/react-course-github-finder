import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";

class App extends Component {

    //lifecycle method, runs at certain point when component is loaded
    //required to return from class
    render() {
        return (
            <div className="App">
                <Navbar/>
                <UserItem/>
            </div>
        );
    }
}

export default App;
