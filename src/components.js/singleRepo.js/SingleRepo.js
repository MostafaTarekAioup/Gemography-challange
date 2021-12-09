import React from 'react'
import './singleRepo.style.scss'
import Moment from 'react-moment';
const SingleRepo = ({name,stargazers_count , created_at , open_issues , owner , description}) => {
    return (
        <article>
            <div className="repo_container">
                <div className="repo_avatar">
                    <img src={owner.avatar_url} alt={owner.login} />
                </div>
                <div className="repo_details">
                    <div className="repo_name">
                        <h3>{name.substring(0, 15)}</h3>
                    </div>
                    <div className="repo_description">
                        <p>{description === null? 'No Description' : description.substring(0, 200)}</p>
                    </div>
                    <div className="repo_status_details">
                        <div className="repo_stars">
                            <p>Stars: {stargazers_count}</p>
                        </div>
                        <div className="repo_issuse">
                            <p>issuse : {open_issues}</p>
                        </div>
                        <div className="repo_owner">
                            <p><span> <Moment className='repo_duration' fromNow>{created_at}</Moment> </span> <span className='owner_name'>{owner.login}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SingleRepo
