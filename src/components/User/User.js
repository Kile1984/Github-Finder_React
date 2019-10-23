import React, { useEffect, useContext } from 'react';
import Repos from '../repos/Repos';
import styles from './User.module.scss';
import Spiner from '../Spiner/Spiner';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {

    const githubContext = useContext(GithubContext);
    const { getUser, loading, user, repos, getUserRepos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        hireable
    } = user;


    if (loading) {
        return <Spiner />
    } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center mt-3">
                        <Link to="/" className="btn btn-light mr-3 border rounded-0">
                            Back to Search
                            </Link>
                        <span className="mr-2">Hireable:</span>
                        {
                            hireable ?
                                <i className={`fas fa-check-circle ${styles.green}`}></i> :
                                <i className={`fas fa-times-circle ${styles.red}`}></i>
                        }

                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12">
                        <div className="d-md-flex border py-3">
                            <div className="col-12 col-md-6 text-center pb-5 pb-md-0">
                                <img src={avatar_url} className={`rounded-circle ${styles.imgWidth}`} alt={login} />
                                <h3>{name}</h3>
                                <h6>{(location && "Location: " + location)}</h6>
                            </div>
                            <div className="col-12 col-md-6">
                                <h5>Bio</h5>
                                <p>{bio}</p>
                                <a href={html_url} className="btn btn-dark my-3 rounded-0">Visit Github Profile</a>
                                <p>Username: {login}</p>
                                <p>{(blog && "Website: " + blog)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="d-md-flex border justify-content-center p-3">
                            <h6><span className="badge badge-danger m-2 p-1">Folowers: {followers}</span></h6>
                            <h6><span className="badge badge-success m-2 p-1">Folowing: {followers}</span></h6>
                            <h6><span className="badge badge-primary m-2 p-1">Public Repos: {followers}</span></h6>
                            <h6><span className="badge badge-dark m-2 p-1">Public Gists: {followers}</span></h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Repos repos={repos} />
                </div>
            </div>
        )
    }
}

export default User;

