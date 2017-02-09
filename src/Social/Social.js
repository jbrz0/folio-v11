import React from 'react';
import {Link} from 'react-router';

export default class Social extends React.Component {
  render() {
    return (
      <div className="socialWrap">
        <div className="socialGrid">
          <Link to="http://be.net/justinbrazeau">
            <div className="socialCard hvr-grow-shadow">
              <h2>Behance</h2>
              <i className="fa fa-behance" aria-hidden="true"></i>
              <p>Showcase</p>
            </div>
          </Link>
        </div>
          <div className="socialGrid">
            <Link to="http://codepen.io/brz0">
              <div className="socialCard hvr-grow-shadow">
                <h2>Codepen</h2>
                <i className="fa fa-codepen" aria-hidden="true"></i>
                <p>Playground</p>
              </div>
            </Link>
          </div>
        <div className="socialGrid">
          <Link to="http://twitter.com/justinbrazeau">
            <div className="socialCard hvr-grow-shadow">
              <h2>Twitter</h2>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <p>Updates</p>
            </div>
          </Link>
        </div>
        <div className="socialGrid">
          <Link to="http://github.com/brz0">
            <div className="socialCard hvr-grow-shadow">
              <h2>Github</h2>
              <i className="fa fa-github" aria-hidden="true"></i>
              <p>Code Base</p>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
