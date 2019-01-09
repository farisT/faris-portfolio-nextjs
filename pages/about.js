import React, { Component } from 'react'
import Navlink from '../components/navlink/link'
import { Main, SocialMedia, Container, Description } from '../components/layout';
import { StandardImage, Triangle } from '../components/image';
import { data } from '../data/descriptions.js';
import TriangleOne from '../assets/about/triangleone.svg';
import TriangleTwo from '../assets/about/triangletwo.svg';
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
          <div>
            <Description title={data.about.title} >
              {data.about.description}
            </Description>
            <Navlink href="/projects">
              View Projects
            </Navlink>
          </div>
          <div style={{position:"relative", marginLeft:"-7px"}} >
            <Triangle className="triangle-about-blue" image={TriangleOne} />
            <div className="about-skills">
              <div>
                  Used Skills
              </div>
              <div style={{fontWeight:"300"}}>
                HTML, CSS, SASS, JavaScript,  React, Node.js, Express, Bootstrap, Firebase, REST API, Firebase, Cloud Functions, PostgreSQL, MongoDB
              </div>
            </div>
          </div>
          <div style={{position:"relative"}} >
            <Triangle className="triangle-about-pink" image={TriangleTwo} />
          </div>
        </div>
      </Main>
    )
  }
}