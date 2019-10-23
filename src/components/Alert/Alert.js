import React, { useContext } from 'react';
import ALertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(ALertContext);
    const { alert } = alertContext;

    return (
        alert !== null && (
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <div className={`alert alert-${alert.type} alert-dismissible fade show mb-0`} role="alert">
                            {alert.msg}
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Alert
