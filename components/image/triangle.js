import React, { Fragment } from 'react';

const Triangle = props => (
    <Fragment>
        <img className={props.className || 'standard-triangle'} src={props.image} />
    </Fragment>
)
export default Triangle;
