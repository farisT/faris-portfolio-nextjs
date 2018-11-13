import React, { Component } from 'react'
import { Main } from '../components/layout';
import { ProjectSlider } from '../components/sliders'

export default class extends Component {
  render() {
    return (
      <Main>
        <ProjectSlider />
      </Main>
    )
  }
}