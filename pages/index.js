import React, { Component } from 'react'
import { Main, SocialMedia } from '../components/layout'
import { ProjectSlider } from '../components/sliders'
import { HomeImage } from '../components/image'
import Timeline from '../components/sliders/timeline';
export default class extends Component {
  render() {
    return (
      <Main>
        <Timeline />
          <ProjectSlider children>
            <div className="home-grid">
              <SocialMedia />
              <HomeImage />
            </div>
          </ProjectSlider>
      </Main>
    )
  }
}