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

    searchUsers = async text => {
        this.setState({loading: true});

        const response = await axios.get(`https://api.github.com/search/users?q=${text}
        &client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_FINDER_SECRET_ID}`);

        this.setState({users: response.data.items, loading: false});
    };

    clearUsers = () => this.setState({users: [], loading: false });

    //lifecycle method, runs at certain point when component is loaded
    //required to return from class
    render() {
        const {users, loading} = this.state;
        return (
            <div className="App">
                <Navbar/>
                <Search searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClearButton={
                            users.length > 0
                        }/>
                <div className="container">
                    <Users loading={loading} users={users}/>
                </div>
            </div>
        );
    }
}

export default App;
