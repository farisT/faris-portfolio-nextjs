import React, { Component } from 'react'
import { Main, SocialMedia, Container, Description } from '../components/layout';
import { HeadImage } from '../components/image';
import BedrijvenPortalMain from '../assets/projectone/bedrijvenportal/bedrijven-portal-main.jpg'
import { data } from '../data/descriptions.js';

export default class extends Component {
  render() {
    return (
      <Main>
          <Container>
            <SocialMedia />
            <HeadImage image={BedrijvenPortalMain} />
          </Container>
          <div className='project-grid'>
            <Description title={data.bedrijvenportal.title} >
              {data.bedrijvenportal.description}
            </Description>
          </div>
      </Main>
    )
  }
}