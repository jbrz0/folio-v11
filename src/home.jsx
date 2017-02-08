import React from 'react';
import Nav from './Nav/Nav.js';
import Intro from './Intro/Intro.js';
import IntroGrid from './IntroGrid/IntroGrid.js';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Intro />
        <IntroGrid />

      </div>
    )
  }
}
