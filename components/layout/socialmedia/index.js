import React from 'react';
import Icon from '../../icon/icon'
import linkedinIcon from '../../../assets/icons/linkedin-in-brands.svg'
import gitHubIcon from '../../../assets/icons/github-alt-brands.svg'

const SocialMedia = () => {
    return(
        <div className="social-media">
            <div className="social-media__container">
                <Icon iconType='--github' image={gitHubIcon} />
            </div>
            <div className="social-media__container">
                <Icon iconType='--linkedin' image={linkedinIcon} />
            </div>
        </div>
    )
}

export default SocialMedia;