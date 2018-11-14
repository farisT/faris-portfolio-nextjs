import React from 'react';
import NavLink from '../../navlink/link'
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';
import BedrijvenportalOne from '../../../assets/projectone/bedrijvenportal/bedrijven-portal-triangle1.png'
import BedrijvenportalTwo from '../../../assets/projectone/bedrijvenportal/bedrijven-portal-triangle2.png'
import SwopOne from '../../../assets/projecttwo/Swop/swop-triangle-one.png'
import SwopTwo from '../../../assets/projecttwo/Swop/swop-triangle-two.png'

const opts = {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
};

const ProjectSlider = props => (
  <div className='slider'>
    <ReactFullpage
     {...opts}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {props.children &&
            <div className='section section--home '>
                {props.children}
                {/* <button onClick={() => fullpageApi.moveSectionDown()}>Hello</button> */}
            </div>
            }
              <div className='section project--one'>
                  <span className='project__number'>1</span>
                  <div className='project__title'>Bedrijvenportal</div>
                  <NavLink
                    href='/bedrijvenportal'
                    className='project__link--blue'
                    text='VIEW PROJECT'
                  />
                  <img className='project__triangle-top' src={BedrijvenportalOne} />
                  <img className='project__triangle-bottom' src={BedrijvenportalTwo} />
                  <div className='project__info'>
                    <div className='project__info-title'>Used Skills</div>
                    <div className='project__info-details'>React, JavaScript, Express, Node.js, MongoDB, Docker, Firebase, SSR, REST API</div>
                  </div>
              </div>
              <div className='section project--two'>
                  <span className='project__number'>2</span>
                  <div className='project__title'>Swop</div>
                  <NavLink
                    href='/swop'
                    className='project__link--blue'
                    text='VIEW PROJECT'
                  />
                  <img className='project__triangle-top' src={SwopOne} />
                  <img className='project__triangle-bottom' src={SwopTwo} />
                  <div className='project__info'>
                    <div className='project__info-title'>Used Skills</div>
                    <div className='project__info-details'>React, JavaScript, Express, Node.js, MongoDB, Docker, Firebase, SSR, REST API</div>
                  </div>
              </div>
              <div className='section project--three'>
                  <span className='project__number'>3</span>
                  <div className='project__title'>ReactStack</div>
                  <NavLink
                    href='/reactstack'
                    className='project__link--blue'
                    text='VIEW PROJECT'
                  />
                  <div className='project__info'>
                    <div className='project__info-title'>Used Skills</div>
                    <div className='project__info-details'>React, JavaScript, Express, Node.js, MongoDB, Docker, Firebase, SSR, REST API</div>
                  </div>
              </div>
            
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </div>
  );

  export default ProjectSlider