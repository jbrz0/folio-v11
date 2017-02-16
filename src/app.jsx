import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import LazyLoad from 'react-lazyload';

// import Home from './home.jsx';
// import NoMatch from './NoMatch/NoMatch.js';

// import Layout from './layout.jsx';

// import ProjectOne from './ProjectOne/ProjectOne.js';
// import ProjectTwo from './ProjectTwo/ProjectTwo.js';
// import ProjectThree from './ProjectThree/ProjectThree.js';
// import ProjectFour from './ProjectFour/ProjectFour.js';
// import ProjectFive from './ProjectFive/ProjectFive.js';
// import ProjectSix from './ProjectSix/ProjectSix.js';


export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>

        <Route path="/" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./home.jsx').default);
          })
        }} />
        <Route path="chart-suite" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./ProjectOne/ProjectOne.js').default);
          })
        }} />
        <Route path="terminal-ui" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./ProjectTwo/ProjectTwo.js').default);
          })
        }} />
        <Route path="homes-from-the-future" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./ProjectThree/ProjectThree.js').default);
          })
        }} />
        <Route path="odd-scenes" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./ProjectFour/ProjectFour.js').default);
          })
        }} />
        <Route path="walltagged" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./ProjectFive/ProjectFive.js').default);
          })
        }} />
        <Route path="gold-tooth" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./ProjectSix/ProjectSix.js').default);
          })
        }} />
        <Route path="*" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./NoMatch/NoMatch.js').default);
          })
        }} />
{/*
        <Route path="/" component={Home} />
        <Route path="chart-suite" component={ProjectOne} />
        <Route path="terminal-ui" component={ProjectTwo} />
        <Route path="homes-from-the-future" component={ProjectThree} />
        <Route path="odd-scenes" component={ProjectFour} />
        <Route path="walltagged" component={ProjectFive} />
        <Route path="gold-tooth" component={ProjectSix} />
        <Route path="*" component={NoMatch}/> */}
      </Router>
    )
  }
}
