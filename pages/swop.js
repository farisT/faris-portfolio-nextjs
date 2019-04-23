import React from 'react'
import { Main, SocialMedia, Container, Description } from '../components/layout';
import { HeadImage, Triangle, StandardImage } from '../components/image';
import ProjectLinks from '../components/project-link/project-link'
import SwopMain from '../assets/projecttwo/Swop/swop-home.jpg'
import TriangleOne from '../assets/projecttwo/greentriangleone.svg';
import TriangleTwo from '../assets/projecttwo/greentriangletwo.svg';
import SwopOne from '../assets/projecttwo/Swop/swop-subscription.png';
import SwopTwo from '../assets/projecttwo/Swop/swop-howitworks.png';
import { data } from '../data/descriptions.js';

export default function () {
    return (
      <Main>
          <Container>
            <SocialMedia/>
            <HeadImage image={SwopMain} />
          </Container>
          <div className='project-grid'>
            <div style={{position:'relative'}}>
              <Triangle className="bp-triangle-one" image={TriangleOne} />
              <div className="project-skills-one--title">
                MY SKILLS
              </div>
              <div className="project-skills-one">
                Node.js, PostgreSQL, Pug
              </div>
            </div>
            <Description title={data.swop.title} >
              {data.swop.description}
            </Description>
            <StandardImage image={SwopOne} className='project-image-one' />
            <div style={{position:'relative'}}>
              <Triangle className="bp-triangle-two" image={TriangleTwo} />
              <ProjectLinks
                githubLink='https://github.com/farisT/Swopproject'
                hostLink='https://swopaholic.herokuapp.com/'
              />
            </div>
            <div/>
            <StandardImage image={SwopTwo}  className='project-image' />
          </div>
      </Main>
    )
};
