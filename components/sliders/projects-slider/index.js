import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';
import faceImg from '../../../assets/homepage/home-face.png'
import faceOutline from '../../../assets/homepage/home-outline.svg'

const ProjectSlider = props => (
  <div className='slider'>
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {props.children &&
            <div className='section'>
                {props.children}
            </div>
            }
            <div className='section project--one'>
                <span className='project__number'>1</span>
            </div>
            <div className='section project--two'>
                <span className='project__number'>2</span>
            </div>
            <div className='section project--three'>
                <span className='project__number'>3</span>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </div>
  );

  export default ProjectSlider