import React, { useState, useContext } from 'react';
import styles from './Search.module.scss';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';


const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState("");

    const onSubmit = e => {
        e.preventDefault();

        if (text === "") {
            alertContext.setAlert("Please enter something", "danger");
        } else {
            githubContext.searchUsers(text);
            setText("");
        }
    }

    const onChange = e => setText(e.target.value);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input type="text"
                                name="text"
                                placeholder="Search Users..."
                                className={`form-control rounded-0 ${styles.input}`}
                                value={text}
                                onChange={onChange} />
                        </div>
                        <button type="submit"
                            className={`btn btn-primary w-100 mb-2 rounded-0 ${styles.btnCustom}`}>
                            SEARCH
                            </button>
                        {
                            githubContext.users.length > 0 &&
                            <button type="button"
                                className={`btn btn-info w-100 rounded-0`}
                                onClick={githubContext.clearUsers}>
                                CLEAR
                            </button>
                        }

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Search;
