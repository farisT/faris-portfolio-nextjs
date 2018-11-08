import React, { Fragment } from 'react';
import Meta from '../Meta'
import Header from './header'

export default (props) =>  (
    <Fragment>
        <Meta />
        <div className="root">
            <Header />
            {props.children}
        </div>
    </Fragment>
)