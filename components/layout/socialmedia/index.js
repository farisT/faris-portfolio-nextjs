import React from 'react';
import Icon from '../../icon/icon'
import linkedinIcon from '../../../assets/icons/linkedin-in-brands.svg'
import gitHubIcon from '../../../assets/icons/github-alt-brands.svg'
import mediumIcon from '../../../assets/icons/medium.svg'

const SocialMedia = () => {
    return(
        <div className="social-media">
            <div className="social-media__container">
								<a href="https://github.com/farisT">
                	<Icon iconType='--github' image={gitHubIcon} />
								</a>
            </div>
            <div className="social-media__container">
								<a href="https://www.linkedin.com/in/faristangastani/">
                	<Icon iconType='--linkedin' image={linkedinIcon} />
								</a>
            </div>
						<div className="social-media__container">
								<a href="https://medium.com/@ftangastani">
                	<Icon iconType='--medium' image={mediumIcon} />
								</a>
            </div>
        </div>
    )
}

export default SocialMedia;
