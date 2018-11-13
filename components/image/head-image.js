import React from 'react';

const HeadImage = props => (
    <div>
        <img src={props.image} className={props.className || 'standard-image'} />
        <div>{props.number}</div>
    </div>
)

export default HeadImage;