import React, { Fragment } from 'react';
import NavLink from '../../navlink/link'

export const Section = props => {
	return (
		<div className='section'>
		<div style={{backgroundColor:"white"}}>
			<div className={props.project}>
				<span className='project__number'>{props.projectNumber}</span>
				<div className='project__title'>{props.projectTitle}</div>
				<NavLink
					href={props.href}
					className='project__link--blue'
					text='VIEW PROJECT'
				/>
				{props.triangleOne &&
				<Fragment>
					<img
						className='project__triangle-top'
						src={props.triangleOne}
					/>
					<img
					className='project__triangle-bottom'
					src={props.triangleTwo}
					/>
				</Fragment>
				}
				<div className='project__info'>
					<div className='project__info-title'>Used Skills</div>
					<div className='project__info-details'>{props.usedSkills}</div>
				</div>
			</div>
		</div>
	</div>
	)
}
