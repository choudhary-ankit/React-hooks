import React, { Component } from 'react'
import Slideshow from './Component/SectionFirst/Slideshow';
import SectionSecond from './Component/SectionSecond/SectionSecond'

export default class App extends Component {
  render() {
    return (
      <div>
        <Slideshow/>
        <SectionSecond/>
      </div>
    )
  }
}
