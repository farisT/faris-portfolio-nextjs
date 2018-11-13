import React, { Component } from 'react'
import { Main, SocialMedia, Container, Description } from '../components/layout';
import { HeadImage } from '../components/image';
import SwopMain from '../assets/projecttwo/Swop/swop-home.jpg'
import { data } from '../data/descriptions.js';

export default class extends Component {
  render() {
    return (
      <Main>
          <Container>
            <SocialMedia />
            <HeadImage image={SwopMain} />
          </Container>
          <div className='project-grid'>
            <div/>
            <Description title={data.swop.title} >
              {data.swop.description}
            </Description>
          </div>
      </Main>
    )
  }
}