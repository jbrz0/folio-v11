import React from 'react';

export default class Social extends React.Component {
  render() {
    return (
      <div className="socialWrap">
        <div className="socialGrid">
          <div className="socialCard hvr-grow-shadow">
            <h2>Behance</h2>
            <i className="fa fa-behance" aria-hidden="true"></i>
            <p>Showcase</p>
          </div>
        </div>
        <div className="socialGrid">
          <div className="socialCard hvr-grow-shadow">
            <h2>Codepen</h2>
            <i className="fa fa-codepen" aria-hidden="true"></i>
            <p>Playground</p>
          </div>
        </div>
        <div className="socialGrid">
          <div className="socialCard hvr-grow-shadow">
            <h2>Twitter</h2>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <p>Updates</p>
          </div>
        </div>
        <div className="socialGrid">
          <div className="socialCard hvr-grow-shadow">
            <h2>Github</h2>
            <i className="fa fa-github" aria-hidden="true"></i>
            <p>Code Base</p>
          </div>
        </div>
      </div>
    )
  }
}
