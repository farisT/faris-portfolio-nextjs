import React from 'react'
import { Main, SocialMedia, Container, Description } from '../components/layout';
import { HeadImage } from '../components/image';
import TriangleOne from '../assets/projecthree/bluetriangleone.svg';
import BedrijvenPortalMain from '../assets/projectone/bedrijvenportal/bedrijven-portal-main.jpg'
import { data } from '../data/descriptions.js';

export default function () {
    return (
      <Main>
          <Container>
            <SocialMedia />
						<HeadImage
						image={BedrijvenPortalMain}
						/>
          </Container>
          <div className='project-grid'>
            <div style={{position:'relative'}}>
								<Triangle
								className="bp-triangle-one"
								image={TriangleOne}
								/>
                <div className="project-skills-one--title">
                  MY SKILLS
                </div>
                <div className="project-skills-one">
                  React, Node.js, React, JavaScript
                </div>
            </div>
						<Description title={data.bedrijvenportal.title}>
              {data.bedrijvenportal.description}
            </Description>
            <StandardImage className='project-image-one' />
            <div style={{position:'relative'}}>
							<Triangle
							className="bp-triangle-two"
							image={TriangleOne}
							/>
              <ProjectLinks
                githubLink='#'
                hostLink='#'
              />
            </div>
            <div/>
            <StandardImage className='project-image' />
            <StandardImage className='project-image' />
          </div>
      </Main>
    )
};
