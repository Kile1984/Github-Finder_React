import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
    return (
        <div className="col-12">
            <div className="my-3 p-3 border">
                <h5>
                    <a href={repo.html_url}>{repo.name}</a>
                </h5>
            </div>
        </div>
    )
}
RepoItem.prpTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem;
