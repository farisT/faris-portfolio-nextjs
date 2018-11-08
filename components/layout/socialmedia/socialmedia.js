import React from 'react';
import linkdinIcon from '../../../assets/icons/linkedin-in-brands.svg'
import gitHubIcon from '../../../assets/icons/github-alt-brands.svg'

const SocialMedia = props => {
    return(
        <div>
            <div className="socialmedia">
                <img className="socialmedia__icon" src={gitHubIcon} />
            </div>
            <div>
                <img className="socialmedia__icon" src={linkdinIcon} />
            </div>
        </div>
    )
}

export default SocialMedia;