import React from 'react';
import styles from './Spiner.module.scss';

const Spiner = () => {
    return (
        <div className="container text-center my-5">
            <div className={`spinner-border text-info ${styles.mySpiner}`} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
export default Spiner;
