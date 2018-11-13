import React, { Fragment } from 'react';

const StandardImage = props => (
    <Fragment>
        <img src={props.image} className={props.className || 'standard-image'} />
    </Fragment>
)

export default StandardImage;