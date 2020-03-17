import React, {Fragment, useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from 'axios'
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./components/pages/About";
import User from "./components/users/User";

const App = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        setLoading(true);

        async function getAllUsersResponse(){
            const response = await axios.get
            (`https://api.github.com/users?since=135' +
            '&client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}' +
            '&client_secret=${process.env.REACT_APP_GITHUB_FINDER_SECRET_ID}`);
            setUsers(response.data);
            setLoading(false);
        }

        getAllUsersResponse();

    }, []);

    const searchUsers = async text => {
        setLoading(true);

        const response = await axios.get(`https://api.github.com/search/users?q=${text}
        &client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_FINDER_SECRET_ID}`);

        setUsers(response.data.items);
        setLoading(false);
    };

    const getUser = async username => {
        setLoading(true);

        const response = await axios.get(`https://api.github.com/users/${username}
        ?client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_FINDER_SECRET_ID}`);

        setUser(response.data);
        setLoading(false);
    };

    const getUserRepos = async (username) => {
        setLoading(true);

        const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc
        &client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_FINDER_SECRET_ID}`);

        setRepos(response.data);
        setLoading(false);
    };

    const clearUsers = () => {
        setUsers([]);
        setLoading(false);
    };

    const setNewAlert = (message, type) => {
        setAlert({message, type});
        setTimeout(() => setAlert(null), 5000);
    };

    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="container">
                    <Alert alert={alert}/>
                    <Switch>
                        <Route exact path='/' render={() => (
                            <Fragment>
                                <Search searchUsers={searchUsers}
                                        clearUsers={clearUsers}
                                        showClearButton={
                                            users.length > 0
                                        }
                                        setAlert={setNewAlert}
                                />
                                <Users loading={loading} users={users}/>
                            </Fragment>
                        )}/>

                        <Route exact path='/about' component={About}/>

                        <Route exact path='/user/:login' render={props => (
                            <User
                                {...props}
                                getUser={getUser}
                                getUserRepos={getUserRepos}
                                user={user}
                                repos={repos}
                                loading={loading}
                            />
                        )}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
