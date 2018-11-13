import React from 'react';

const Icon = props => (
    <img className={"icon" + props.iconType} src={props.image} />
)
 
export default Icon;