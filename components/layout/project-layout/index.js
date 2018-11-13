import React from 'react';
import SocialMedia from '../socialmedia'
import { ProjectTitle } from '../../title'

const ProjectLayout = props => (
    <div>
        <div>
            <SocialMedia />
            <img src={props.headImage}/>
            <div>{props.projectNumber}</div>

            <ProjectTitle />
        </div>
        {props.children}
    </div>
)

export default ProjectLayout;