import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {

    return (
        <nav className="navbar bg-primary">
            <i className={props.iconClass}/> {props.title}
        </nav>
    );

};

Navbar.defaultProps = {
    title: 'Github Finder default',
    iconClass: 'fab fa-github'
};

Navbar.staticpropTypes = {
    title: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired
};

export default Navbar;