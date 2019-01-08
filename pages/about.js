import React, { Component } from 'react'
import { Main, SocialMedia, Container, Description } from '../components/layout';
import { StandardImage } from '../components/image';
import { data } from '../data/descriptions.js';
export default class extends Component {
  render() {
    return (
      <Main>
        <Container>
          <SocialMedia />
          <StandardImage className='about-image-normal' />
          <StandardImage className='about-image-small'/>
        </Container>
        <div className="about-grid">
        <div/>
          <Description title={data.about.title} >
            {data.about.description}
          </Description>
        </div>
      </Main>
    )
  }
}