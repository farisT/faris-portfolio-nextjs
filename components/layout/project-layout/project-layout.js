import React from 'react';
import SocialMedia from '../socialmedia/socialmedia'

const ProjectLayout = props => (
    <div>
        <div>
            <SocialMedia />
            <img src={props.headImage}/>
        </div>
        {props.children}
    </div>
)

export default ProjectLayout;