import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";

class App extends Component {

    //lifecycle method, runs at certain point when component is loaded
    //required to return from class
    render() {
        return (
            <nav className="navbar bg-primary">
                <Navbar/>
            </nav>
        );
    }
}

export default App;
