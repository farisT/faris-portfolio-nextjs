import React, { Component } from 'react'
import { Main, SocialMedia, Container } from '../components/layout';
import { StandardImage } from '../components/image';

export default class extends Component {
  render() {
    console.log(global.innerWidth)
    return (
      <Main>
        <Container>
          <SocialMedia />
          <StandardImage className='about-image-normal' />
          <StandardImage className='about-image-small'/>
        </Container>
      </Main>
    )
  }
}