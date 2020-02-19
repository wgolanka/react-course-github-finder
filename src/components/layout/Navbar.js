import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <i className={this.props.iconClass} /> {this.props.title}
            </div>
        );
    }
}

export default Navbar;