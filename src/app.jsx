import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import LazyLoad from 'react-lazyload';
import Home from './home.jsx';
import NoMatch from './NoMatch/NoMatch.js';
// import Layout from './layout.jsx';

import ProjectOne from './ProjectOne/ProjectOne.js';
import ProjectTwo from './ProjectTwo/ProjectTwo.js';

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <LazyLoad><Route path="/" component={Home} /></LazyLoad>
        <LazyLoad><Route path="chart-suite" component={ProjectOne} /></LazyLoad>
        <LazyLoad><Route path="terminal-ui" component={ProjectTwo} /></LazyLoad>
        <LazyLoad><Route path="*" component={NoMatch}/></LazyLoad>
      </Router>
    )
  }
}
