import React from 'react'
import Navlink from '../components/navlink/link'
import { Main, SocialMedia, Container, Description } from '../components/layout';
import { StandardImage, Triangle } from '../components/image';
import { data } from '../data/descriptions.js';
import TriangleOne from '../assets/about/triangleone.svg';
import TriangleTwo from '../assets/about/triangletwo.svg';

export default function () {
    return (
      <Main>
        <Container>
          <SocialMedia />
          <div>
            <div className="about-main-title">Nice to meet you!</div>
            <div className="about-sub-title">As a Full-stack Developer I work mainly with Node.js, React.js, Redux, JavaScript and TypeScript. I ensure the delivery of a maintainable and scalable application with consistent code".</div>
            <StandardImage className='about-image-normal' />
          </div>
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
            {/* <div className="about-skills">
              <div>
                  Used Skills
              </div>
              <div style={{fontWeight:"300"}}>
                HTML, CSS, SASS, JavaScript,  React, Node.js, Express, Bootstrap, Firebase, REST API, Firebase, Cloud Functions, PostgreSQL, MongoDB
              </div>
            </div> */}
          </div>
          <div style={{position:"relative"}} >
            <Triangle className="triangle-about-pink" image={TriangleTwo} />
          </div>
        </div>
      </Main>
    )
};
