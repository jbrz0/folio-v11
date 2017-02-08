import React from 'react';
import Prime from '../img/prime.svg';
import HomeBgLink from '../img/bg.png';
const HomeBg = {backgroundImage: 'url(' + HomeBgLink + ')'};

var Scroll  = require('react-scroll');
var Link       = Scroll.Link;
// var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


export default class Intro extends React.Component {

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive(to) {
    console.log(to);
  }

  render() {
    return (
      <div className="homeBg" style={HomeBg}>
        <div className="homeSectionWrap">

          <div className="homeSectionLeft">
            <img src={Prime} className="prime" />
          </div>
          <div className="homeSectionRight">
            <div>
              <h1>Web Maker</h1>
              <p>I build digital products with a detailed eye for design, responsiveness, interaction & style.</p>
                <div className="processWrap">
                  <span className="fira yellow">concept</span>
                  <span className="fira teal">&nbsp;->&nbsp;</span>
                  <span className="fira green">design</span>
                  <span className="fira teal">&nbsp;->&nbsp;</span>
                  <span className="fira red">code</span>
                </div>
                <Link activeClass="active" to="projects" spy={true}
                  smooth={true} offset={-42} duration={500} onSetActive={this.handleSetActive}>
                  <button className="homeBtn hvr-pulse">VIEW WORK</button>
                </Link>
              </div>
            </div>

        </div>
      </div>
    )
  }
}
