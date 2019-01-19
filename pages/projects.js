import React, { Component } from 'react'
import { Main } from '../components/layout';
import { ProjectSlider } from '../components/sliders'
import Timeline from '../components/sliders/timeline';

export default class extends Component {
  state = {

  }
  render() {
    return (
      <Main>
        <ProjectSlider />
      </Main>
    )
  }
}