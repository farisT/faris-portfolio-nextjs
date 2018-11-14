import React, { Component } from 'react'
import { Main, SocialMedia, Container, Description } from '../components/layout';
import { HeadImage, Triangle } from '../components/image';
import SwopMain from '../assets/projecttwo/Swop/swop-home.jpg'
import TriangleOne from '../assets/projecttwo/greentriangleone.svg';
import { data } from '../data/descriptions.js';

export default class extends Component {
  state = {
    windowSize: global.innerWidth
  }
  componentDidMount(){
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize)
  }
  handleResize = () => {
    this.setState({
      windowSize: window.innerWidth
    })
  }
  render() {
    const { windowSize } = this.state;
    return (
      <Main>
          <Container>
            {windowSize >= 650 && <SocialMedia />}
            <HeadImage image={SwopMain} />
          </Container>
          <div className='project-grid'>
            <Triangle image={TriangleOne} />
            <Description title={data.swop.title} >
              {data.swop.description}
            </Description>
          </div>
      </Main>
    )
  }
}