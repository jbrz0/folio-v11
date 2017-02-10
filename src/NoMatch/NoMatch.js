import React from 'react';
import Nav from '../Nav/Nav.js';
import {Link} from 'react-router';
import ErrorBot from '../img/ErrorBot-NotFound.svg';
import HomeBgLink from '../img/bg.png';
const HomeBg = {backgroundImage: 'url(' + HomeBgLink + ')'};

export default class NoMatch extends React.Component {
  render() {
    return (
      <div className="homeBg" style={HomeBg}>
        <Nav />

        <div className="botWrap">
          <img src={ErrorBot} className="bot" alt="404 bot" />
          <p>This page does not exist (404)</p>
          <Link to="/" className="errorLink">
            <button className="homeBtn hvr-pulse errorBtn">GO HOME</button>
          </Link>
        </div>

      </div>
    )
  }
}
