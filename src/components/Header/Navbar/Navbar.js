import React from 'react';
import '../../App/App.module.scss';
import styles from './Navbar.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.bgCustom}`}>
            <div className="container">
                <div className={`row ${styles.row}`}>
                    <div className="col-6 col-md-6">
                        <h1>
                            <i className={icon}></i> {title}
                        </h1>
                    </div>
                    <div className="col-6 col-md-6 align-self-md-center text-right">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end text-left" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to='/' className="nav-link" href="#">Home <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/about' className="nav-link" href="#">About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
