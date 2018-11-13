import React from 'react';

export default props => (
    <div className="description-container">
        <h1 className="description-title">{props.title}</h1>
        <div className="description">{props.children}</div>
    </div>
)
