import React from 'react';
import '../App/App.module.scss';
import PropTypes from 'prop-types';
import styles from './UserItem.module.scss';
import { Link } from 'react-router-dom';

const UserItem = props => {
    const { id, login, avatar_url } = props.user;

    return (
        <div className={`col-12 col-md-6 col-lg-3 mb-3 text-center pt-5 
                ${styles.cardWrap}`}>
            <div className={`card rounded-0 
                    ${styles.card}`}>
                <img
                    src={avatar_url}
                    className={`card-img-top rounded-circle ${styles.img}`}
                    alt={avatar_url} />
                <div className="card-body">
                    <h5 className="card-title mb-3">#{id}</h5>
                    <h5 className="card-title mb-3">{login}</h5>
                    <Link to={`/user/${login}`} className={`btn btn-primary rounded-0       ${styles.btnPrimary}`}>
                        More
                        </Link>
                </div>
            </div>
        </div>
    )
}

UserItem.prpTypes = {
    user: PropTypes.object.isRequired
}
export default UserItem;
