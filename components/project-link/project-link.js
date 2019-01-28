import React from 'react';
import Icon from '../icon/icon'
import linkIcon from '../../assets/icons/link.svg'
import gitHubIcon from '../../assets/icons/github-alt-brands.svg'

const ProjectLinks = props => {
    return(
        <div className="project-links">
            <div className="view-online">VIEW ONLINE</div>
            <div className="project-links__container">
                <a href={props.hostLink}>
                    <Icon iconType='--link' image={linkIcon} />
                </a>
            </div>
            <div className="project-links__container">
                <a href={props.githubLink}>
                    <Icon iconType='--github' image={gitHubIcon} />
                </a>
            </div>
        </div>
    )
}

export default ProjectLinks;