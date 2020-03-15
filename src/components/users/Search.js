import React, {useState} from 'react';
import PropTypes from 'prop-types'

const Search = ({searchUsers, showClearButton, clearUsers, setAlert}) => {

    const [text, setText] = useState('')

    const onChange = event => {
        setText(event.target.value)
    };

    const onSubmit = form => {
        form.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light')
        } else {
            searchUsers(text);
            setText('')
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text"
                       name="text"
                       placeholder="Search Users..."
                       value={text}
                       onChange={onChange}/>

                <input type="submit"
                       value="Search"
                       className="btn btn-dark btn-block"/>
            </form>
            {showClearButton && (
                <button className="btn btn-light btn-block"
                        onClick={clearUsers}>Clear</button>
            )}
        </div>
    );
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearButton: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
};

export default Search;