import React, { Component } from 'react'
import Layout from '../components/layout/index';
import SocialMedia from '../components/layout/socialmedia/socialmedia'
import { ProjectSlider } from '../components/sliders'
import { HomeImage } from '../components/image'
export default class extends Component {
  render() {
    return (
      <Layout>
          <ProjectSlider>
            <div className="home-grid">
              <SocialMedia />
              <HomeImage />
            </div>
          </ProjectSlider>
      </Layout>

    )
  }
}