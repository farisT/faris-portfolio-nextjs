import React, { Component } from 'react'
import { Main, SocialMedia, Container, Description } from '../components/layout';
import { HeadImage, Triangle, StandardImage } from '../components/image';
import ProjectLinks from '../components/project-link/project-link'
import ReactStackMain from '../assets/projectthree/reactstack-main.jpg'
import TriangleOne from '../assets/projectthree/bluetriangleone.svg';
import TriangleTwo from '../assets/projectthree/bluetriangletwo.svg';
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
            <div style={{position:'relative'}}>
              <Triangle className="bp-triangle-one" image={TriangleOne} />
              <div className="project-skills-one--title">
                MY SKILLS
              </div>
              <div className="project-skills-one">
                React, Node.js, MongoDB/MongoAtlas, SASS
              </div>
            </div>
            <Description title={data.reactstack.title} >
              {data.reactstack.description}
            </Description>
            <StandardImage className='project-image-one' />
            <div style={{position:'relative'}}>
              <Triangle className="rs-triangle-two" image={TriangleTwo} />
              <ProjectLinks
                githubLink='https://github.com/farisT/ReactStack'
              />
            </div>
            <div/>
            <StandardImage className='project-image' />
          </div>
      </Main>
    )
  }
}
