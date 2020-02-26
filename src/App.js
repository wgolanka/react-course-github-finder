import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from 'axios'
import Search from "./components/users/Search";

class App extends Component {

    state = {
        users: [],
        loading: false
    };

    async componentDidMount() {
        this.setState({loading: true});

        const response = await axios.get
        (`https://api.github.com/users?since=135' +
            '&client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}' +
            '&client_secret=${process.env.REACT_APP_GITHUB_FINDER_SECRET_ID}`);

        this.setState({users: response.data, loading: false});
    }

    //lifecycle method, runs at certain point when component is loaded
    //required to return from class
    render() {
        return (
            <div className="App">
                <Navbar/>
                <Search/>
                <div className="container">
                    <Users loading={this.state.loading} users={this.state.users}/>
                </div>
            </div>
        );
    }
}

export default App;
