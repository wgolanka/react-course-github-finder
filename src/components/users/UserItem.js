import React, {Component} from 'react';

class UserItem extends Component {
    //possible way to add state but not recommended unless we need it for smth else too
    // constructor() {
    //     super();
    //     this.state = {
    //         id: 'id',
    //         login: 'simonjefford',
    //         avatar_url: 'https://avatars2.githubusercontent.com/u/136?v=4',
    //         html_url: 'https://github.com/simonjefford'
    //     }
    // }

    //other way is just to put state like that in the class
    state = {
        id: 'id',
        login: 'simonjefford',
        avatar_url: 'https://avatars2.githubusercontent.com/u/136?v=4',
        html_url: 'https://github.com/simonjefford'
    };

    render() {
        return (
            <div className="card text-center">
                <img
                    src={this.state.avatar_url}
                    alt=""
                    className="round-img"
                    style={{width: '60px'}}
                />
                <h3>{this.state.login}</h3>
                <div>
                    <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">
                        More
                    </a>

                </div>
            </div>
        );
    }
}

export default UserItem;