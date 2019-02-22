import React from 'react';
import LineImg from '../../assets/slider/Line.svg'
const Timeline = props => {
    return(
        <>
            <span className="timeline-container">
                <img className="line" src={LineImg} />
            </span>
            <span className={props.className || "project-number"}>
                <sup className="fraction-style">{props.number}</sup >
                <span className="subfraction-style" >&frasl;</span>
                <sub className="subfraction-style">5</sub>
            </span>
        </>
    )
}

export default Timeline;
