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
            company,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            html_url
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
                <div className='card grid-2'>

                    <div className='all-center'>
                        <img src={avatar_url}
                             className="round-img"
                             alt=""
                             style={{width: '150px'}}
                        />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>

                    <div>
                        {bio && <Fragment>
                            <h3> Bio
                                <p>
                                    {bio}
                                </p>
                            </h3>
                        </Fragment>}

                        <a href={html_url} className="btn btn-dark my-1">
                            Visit Github Profile
                        </a>

                        <ul>
                            <li>
                                {login &&
                                <Fragment>
                                    <strong>Username:</strong> {login}
                                </Fragment>}
                            </li>
                            <li>
                                {company &&
                                <Fragment>
                                    <strong>Company:</strong> {company}
                                </Fragment>}
                            </li>
                            <li>
                                {blog &&
                                <Fragment>
                                    <strong>Website:</strong> {blog}
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default User;