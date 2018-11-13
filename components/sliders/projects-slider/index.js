import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';

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
              </div>
              <div className='section project--two'>
                  <span className='project__number'>2</span>
                  <div className='project__title'>Swop</div>
              </div>
              <div className='section project--three'>
                  <span className='project__number'>3</span>
                  <div className='project__title'>ReactStack</div>
              </div>
            
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </div>
  );

  export default ProjectSlider