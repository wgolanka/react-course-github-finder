import React, {Component} from 'react';

class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder default',
        iconClass: 'fab fa-github'
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