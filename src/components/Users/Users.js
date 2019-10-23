import React, { useContext } from 'react';
import '../App/App.module.scss';
import UserItem from '../UserItem/UserItem';
import Spiner from '../Spiner/Spiner';
import GithubContext from '../../context/github/githubContext';

const User = () => {

    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;

    if (loading) {
        return <Spiner />
    } else {
        return (
            <>
                <div className="container">
                    <div className="row">

                        {
                            users.map(user => {
                                return (
                                    <UserItem key={user.id} user={user} />
                                );
                            })
                        }

                    </div>
                </div>
            </>
        );
    }

}

export default User;