import React, { Component } from 'react'
import { Main, SocialMedia, Container, Description } from '../components/layout';
import { HeadImage, StandardImage, Triangle } from '../components/image';
import { SmallSlider } from '../components/sliders';
import ProjectLinks from '../components/project-link/project-link'
import BedrijvenPortalMain from '../assets/projectone/bedrijvenportal/bedrijven-portal-main.jpg'
import BedrijvenPortalHome from '../assets/projectone/bedrijvenportal/bedrijven-portal-home.png'
import BedrijvenPortalSearch from '../assets/projectone/bedrijvenportal/bedrijven-portal-search.png'
import BedrijvenPortalSeo from '../assets/projectone/bedrijvenportal/bedrijven-portal-seo.png'
import TriangleOne from '../assets/projectone/pinktriangleone.svg'
import TriangleTwo from '../assets/projectone/pinktriangletwo.svg'
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
            <div style={{position:'relative'}}>
              <Triangle className="bp-triangle-one" image={TriangleOne} />
              <div className="project-skills-one--title">
                MY SKILLS
              </div>
              <div className="project-skills-one">
                React, JavaScript, Express, Node.js, MongoDB, Docker, Firebase, SSR, REST API
              </div>
            </div>
            <Description title={data.bedrijvenportal.title} >
              {data.bedrijvenportal.description}
            </Description>
            <StandardImage image={BedrijvenPortalHome} className='project-image-one' />
            <div style={{position:'relative'}}>
              <Triangle className="bp-triangle-two" image={TriangleTwo} />
              <ProjectLinks
                githubLink='#'
                hostLink='#'
              />
            </div>
            <div/>
            <StandardImage image={BedrijvenPortalSearch} className='project-image' />
            <StandardImage image={BedrijvenPortalSeo} className='project-image' />
          </div>
      </Main>
    )
  }
}