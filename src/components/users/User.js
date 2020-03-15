import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Spinner from "../layout/Spinner";

class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
    };

    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const {loading} = this.props;

        if (loading) {
            return <Spinner/>
        }

        return (
            <div>
                <h1>User login is {login} {name}</h1>
            </div>
        );
    }
}

export default User;