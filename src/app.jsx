import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
var ReactGA = require('react-ga');
ReactGA.initialize('UA-45238727-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory} onUpdate={logPageView}>
        <Route path="/" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./home.jsx').default); }) }} />
        <Route path="chart-suite" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./ProjectOne/ProjectOne.js').default); }) }} />
        <Route path="terminal-ui" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./ProjectTwo/ProjectTwo.js').default); }) }} />
        <Route path="homes-from-the-future" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./ProjectThree/ProjectThree.js').default); }) }} />
        <Route path="odd-scenes" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./ProjectFour/ProjectFour.js').default); }) }} />
        <Route path="walltagged" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./ProjectFive/ProjectFive.js').default); }) }} />
        <Route path="gold-tooth" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./ProjectSix/ProjectSix.js').default); }) }} />
        <Route path="*" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./NoMatch/NoMatch.js').default); }) }} />
      </Router>
    )
  }
}
