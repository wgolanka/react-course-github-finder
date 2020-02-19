import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder default',
        iconClass: 'fab fa-github'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        iconClass: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <i className={this.props.iconClass} /> {this.props.title}
            </div>
        );
    }
}

export default Navbar;