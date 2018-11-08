import React, { Component } from 'react'
import Layout from '../components/layout/index';
import { ProjectSlider } from '../components/sliders'

export default class extends Component {
  render() {
    return (
      <Layout>
        <ProjectSlider/>
        <div class="box">text</div>
        <div class="box">text</div>
        <div class="box">text</div>
        <div class="box">text</div>
      </Layout>

    )
  }
}