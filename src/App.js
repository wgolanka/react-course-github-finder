import React, {Component, Fragment} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from 'axios'
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./components/pages/About";

class App extends Component {

    state = {
        users: [],
        user: {},
        loading: false,
        alert: null
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

    getUser = async (username) => {
        this.setState({loading: true});

        const response = await axios.get(`https://api.github.com/users/${username}
        &client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_FINDER_SECRET_ID}`);

        this.setState({user: response.data, loading: false});
    };

    clearUsers = () => this.setState({users: [], loading: false});

    setAlert = (message, type) => {
        this.setState(
            {
                alert: {message, type}
            }
        );
        setTimeout(() => this.setState({alert: null}), 5000);
    };

    //lifecycle method, runs at certain point when component is loaded
    //required to return from class
    render() {
        const {users, loading} = this.state;
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <div className="container">
                        <Alert alert={this.state.alert}/>
                        <Switch>
                            <Route exact path='/' render={props => (
                                <Fragment>
                                    <Search searchUsers={this.searchUsers}
                                            clearUsers={this.clearUsers}
                                            showClearButton={
                                                users.length > 0
                                            }
                                            setAlert={this.setAlert}
                                    />
                                    <Users loading={loading} users={users}/>
                                </Fragment>
                            )} />
                            <Route exact path='/about' component={About}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
