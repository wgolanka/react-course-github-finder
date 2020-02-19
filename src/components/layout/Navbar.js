import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <i className='fab fa-github' /> {this.props.title}
            </div>
        );
    }
}

export default Navbar;