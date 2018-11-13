import React, { Component } from 'react'
import { Main, SocialMedia, Container, Description } from '../components/layout';
import { HeadImage } from '../components/image';
import ReactStackMain from '../assets/projectthree/reactstack-main.jpg'
import { data } from '../data/descriptions.js';

export default class extends Component {
  render() {
    return (
      <Main>
          <Container>
            <SocialMedia />
            <HeadImage image={ReactStackMain} />
          </Container>
          <div className='project-grid'>
            <div/>
            <Description title={data.reactstack.title} >
              {data.reactstack.description}
            </Description>
          </div>
      </Main>
    )
  }
}