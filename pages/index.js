import React from 'react'
import { Main, SocialMedia } from '../components/layout'
import { ProjectSlider } from '../components/sliders'
import { HomeImage } from '../components/image'

export default function () {
    return (
      <Main>
          <ProjectSlider children>
            <div className='home-grid'>
              <SocialMedia />
              <HomeImage />
            </div>
          </ProjectSlider>
      </Main>
    )
};
