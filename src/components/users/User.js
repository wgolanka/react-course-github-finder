import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Spinner from "../layout/Spinner";
import {Link} from 'react-router-dom'

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
            <Fragment>
                <Link to={'/'} className='btn btn-light'>
                    Back to search
                </Link>

                Hireable:{' '}
                {hireable ? <i className="fas fa-check text-success"/>
                    : <i className="fas fa-times-circle text-danger"/>
                }
                <div className=".card.grid-2">
                    <img src={avatar_url} className="round-img" alt=""
                         style={{width: '150px'}}/>
                </div>
            </Fragment>
        );
    }
}

export default User;