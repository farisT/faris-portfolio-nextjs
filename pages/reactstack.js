import React, { Component } from 'react'
import { Main, SocialMedia, Container, Description } from '../components/layout';
import { HeadImage } from '../components/image';
import ReactStackMain from '../assets/projectthree/reactstack-main.jpg'
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
            <HeadImage image={ReactStackMain} />
          </Container>
          <div className='project-grid'>
            <div/>
            <Description title={data.reactstack.title} >
              {data.reactstack.description}
            </Description>
          </div>
      </Main>
    )
  }
}