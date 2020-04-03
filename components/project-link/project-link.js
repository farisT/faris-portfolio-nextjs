import React from 'react';
import Icon from '../icon/icon'
import linkIcon from '../../assets/icons/link.svg'
import gitHubIcon from '../../assets/icons/github-alt-brands.svg'

const ProjectLinks = props => {
    return(
        <div className="project-links">
            <div className="view-online">VIEW ONLINE</div>
				{props.hostLink &&
            <div className="project-links__container">
                <a href={props.hostLink}>
										<Icon
										iconType='--link'
										image={linkIcon}
										/>
                </a>
            </div>}
            {props.githubLink && <div className="project-links__container">
                <a href={props.githubLink}>
										<Icon
										iconType='--github'
										image={gitHubIcon}
										/>
                </a>
            </div>}
        </div>
    )
}

export default ProjectLinks;
