import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import LazyLoad from 'react-lazyload';
import Home from './home.jsx';
import NoMatch from './NoMatch/NoMatch.js';
// import Layout from './layout.jsx';

import ProjectOne from './ProjectOne/ProjectOne.js';
import ProjectTwo from './ProjectTwo/ProjectTwo.js';
import ProjectThree from './ProjectThree/ProjectThree.js';
import ProjectFour from './ProjectFour/ProjectFour.js';
import ProjectFive from './ProjectFive/ProjectFive.js';
import ProjectSix from './ProjectSix/ProjectSix.js';


export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <LazyLoad><Route path="/" component={Home} /></LazyLoad>
        <LazyLoad><Route path="chart-suite" component={ProjectOne} /></LazyLoad>
        <LazyLoad><Route path="terminal-ui" component={ProjectTwo} /></LazyLoad>
        <LazyLoad><Route path="homes-from-the-future" component={ProjectThree} /></LazyLoad>
        <LazyLoad><Route path="odd-scenes" component={ProjectFour} /></LazyLoad>
        <LazyLoad><Route path="walltagged" component={ProjectFive} /></LazyLoad>
        <LazyLoad><Route path="gold-tooth" component={ProjectSix} /></LazyLoad>
        <LazyLoad><Route path="*" component={NoMatch}/></LazyLoad>
      </Router>
    )
  }
}
