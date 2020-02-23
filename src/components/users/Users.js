import React, {Component} from 'react';
import UserItem from "./UserItem";

class Users extends Component {

    state = {
        users: [
            {
                "login": "simonjefford",
                "id": 136,
                "node_id": "MDQ6VXNlcjEzNg==",
                "avatar_url": "https://avatars2.githubusercontent.com/u/136?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/simonjefford",
                "html_url": "https://github.com/simonjefford",
                "followers_url": "https://api.github.com/users/simonjefford/followers",
                "following_url": "https://api.github.com/users/simonjefford/following{/other_user}",
                "gists_url": "https://api.github.com/users/simonjefford/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/simonjefford/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/simonjefford/subscriptions",
                "organizations_url": "https://api.github.com/users/simonjefford/orgs",
                "repos_url": "https://api.github.com/users/simonjefford/repos",
                "events_url": "https://api.github.com/users/simonjefford/events{/privacy}",
                "received_events_url": "https://api.github.com/users/simonjefford/received_events",
                "type": "User",
                "site_admin": false
            },
            {
                "login": "josh",
                "id": 137,
                "node_id": "MDQ6VXNlcjEzNw==",
                "avatar_url": "https://avatars2.githubusercontent.com/u/137?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/josh",
                "html_url": "https://github.com/josh",
                "followers_url": "https://api.github.com/users/josh/followers",
                "following_url": "https://api.github.com/users/josh/following{/other_user}",
                "gists_url": "https://api.github.com/users/josh/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/josh/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/josh/subscriptions",
                "organizations_url": "https://api.github.com/users/josh/orgs",
                "repos_url": "https://api.github.com/users/josh/repos",
                "events_url": "https://api.github.com/users/josh/events{/privacy}",
                "received_events_url": "https://api.github.com/users/josh/received_events",
                "type": "User",
                "site_admin": false
            },
            {
                "login": "stevedekorte",
                "id": 138,
                "node_id": "MDQ6VXNlcjEzOA==",
                "avatar_url": "https://avatars3.githubusercontent.com/u/138?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/stevedekorte",
                "html_url": "https://github.com/stevedekorte",
                "followers_url": "https://api.github.com/users/stevedekorte/followers",
                "following_url": "https://api.github.com/users/stevedekorte/following{/other_user}",
                "gists_url": "https://api.github.com/users/stevedekorte/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/stevedekorte/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/stevedekorte/subscriptions",
                "organizations_url": "https://api.github.com/users/stevedekorte/orgs",
                "repos_url": "https://api.github.com/users/stevedekorte/repos",
                "events_url": "https://api.github.com/users/stevedekorte/events{/privacy}",
                "received_events_url": "https://api.github.com/users/stevedekorte/received_events",
                "type": "User",
                "site_admin": false
            }
        ]
    };

    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(
                    user => (
                        <UserItem key={user.id} user={user}/>
                    )
                )}
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Users;