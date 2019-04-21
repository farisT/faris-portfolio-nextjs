import React from 'react';
import { Projects } from '../../../data/projects';
import Timeline from '../timeline';
import arrowIcon from '../../../assets/etc/arrow.svg';
import ReactFullpage from '@fullpage/react-fullpage';
import BedrijvenportalOne from '../../../assets/projectone/bedrijvenportal/bedrijven-portal-triangle1.png'
import BedrijvenportalTwo from '../../../assets/projectone/bedrijvenportal/bedrijven-portal-triangle2.png'
import SwopOne from '../../../assets/projecttwo/Swop/swop-triangle-one.png'
import SwopTwo from '../../../assets/projecttwo/Swop/swop-triangle-two.png'
import { Section } from './section';

const opts = {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
};

export default class ProjectSlider extends React.Component {
  state =  {
    slideNumber:1,
    homeCheck:false,
  }
  componentDidMount(){
    if(this.props.children){
      this.setState({
        homeCheck:true,
        slideNumber: 0
      })
    }
  }
  onLeave = (origin, destination, direction) => {
    if(!this.state.homeCheck){
      this.setState({
        slideNumber:destination.index + 1,
        lineFractionClass: ''
      })
    }
    else {
      this.setState({
        slideNumber:destination.index
      })
    }
  }

  render(){
    const props = this.props;
		const { slideNumber } = this.state
    return(
      <div className='slider'>
      {props.children && slideNumber === 0 ?  null : <Timeline className={'project-number' + '__' + slideNumber}  number={this.state.slideNumber} />}
        <ReactFullpage
        anchors={['firstPage', 'secondPage', 'thirdPage', 'forthPage', 'fifthpage']}
        onLeave={this.onLeave}
        {...opts}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                {props.children &&
                <div className='section section--home '>
										{props.children}
										<div className="home-title">Faris.</div>
                    <div onClick={() => fullpageApi.moveSectionDown()}>
                      <a href="#" className="header__link">PROJECTS</a>
											<div>
												<img className="arrow" src={arrowIcon} />
											</div>
                    </div>
                </div>
								}
									<Section
									project='project--one'
									projectTitle={Projects.bedrijvenportal.title}
									projectNumber={Projects.bedrijvenportal.projectNumber}
									triangleOne={BedrijvenportalOne}
									triangleTwo={BedrijvenportalTwo}
									usedSkills={Projects.bedrijvenportal.usedSkills}
									href='/bedrijvenportal'
									/>
									<Section
									project='project--two'
									projectTitle={Projects.swop.title}
									projectNumber={Projects.swop.projectNumber}
									triangleOne={SwopOne}
									triangleTwo={SwopTwo}
									usedSkills={Projects.swop.usedSkills}
									href='/swop'
									/>
									<Section
									project='project--three'
									projectTitle={Projects.reactstack.title}
									projectNumber={Projects.reactstack.projectNumber}
									usedSkills={Projects.reactstack.usedSkills}
									href='/reactstack'
									/>
									<Section
									project='project--one'
									projectTitle={Projects.smoelenboek.title}
									projectNumber={Projects.smoelenboek.projectNumber}
									usedSkills={Projects.smoelenboek.usedSkills}
									href='/smoelenboek'
									/>
									<Section
									project='project--two'
									projectTitle={Projects.liftr.title}
									projectNumber={Projects.liftr.projectNumber}
									usedSkills={Projects.liftr.usedSkills}
									href='/liftr'
									/>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
  )}
}
