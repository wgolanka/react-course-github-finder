import React, {useReducer} from "react";
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

const GithubState = props => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    //we call an action, for instance: make a request to github
    // we get a response and then we dispatch type back to our reducer
    const [state, dispatch] = useReducer(GithubReducer, initialState);


    return <GithubContext.Provider value={
        {
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading
        }
    } >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState