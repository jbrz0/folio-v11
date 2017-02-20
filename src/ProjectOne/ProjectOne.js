import React from 'react';
import Nav from '../Nav/Nav.js';
import {Link} from 'react-router';
import ReactTooltip from 'react-tooltip';
import LazyLoad from 'react-lazyload';
var Scroll  = require('react-scroll');
var Element    = Scroll.Element;
const {Fullpage, Slide, TopNav} = require('fullpage-react');
import Gallery from 'react-photo-gallery';

// Bg Top Image
import ProjBgLink from '../img/bg.png';

// Tech Icons
import Sass from '../img/tech/sass.png';
import DThree from '../img/tech/d3.png';
import ReactJs from '../img/tech/react.png';
import Javascript from '../img/tech/js.png';
import NodeJs from '../img/tech/nodejs.png';
import PostCss from '../img/tech/postcss.png';
import Webpack from '../img/tech/webpack.png';
import Sketch from '../img/tech/sketch.png';
import Illustrator from '../img/tech/illustrator.png';

// Gallery Images

import ProjOnePartOneA from '../img/pieces/project1-part1a.jpg';
import ProjOnePartOneB from '../img/pieces/project1-part1b.jpg';
import ProjOnePartOneC from '../img/pieces/project1-part1c.jpg';
import ProjOnePartTwoA from '../img/pieces/project1-part2a.jpg';
import ProjOnePartTwoB from '../img/pieces/project1-part2b.jpg';
import ProjOnePartTwoC from '../img/pieces/project1-part2c.jpg';
import ProjOnePartThreeA from '../img/pieces/project1-part4a.jpg';
import ProjOnePartThreeB from '../img/pieces/project1-part4b.jpg';
import ProjOnePartThreeC from '../img/pieces/project1-part4c.jpg';
import ProjOnePartFourA from '../img/pieces/project1-part3a.jpg';
import ProjOnePartFourB from '../img/pieces/project1-part3b.jpg';
import ProjOnePartFourC from '../img/pieces/project1-part3c.jpg';
import ProjOnePartFiveA from '../img/pieces/project1-part5a.jpg';
import ProjOnePartFiveB from '../img/pieces/project1-part5b.jpg';
import ProjOnePartFiveC from '../img/pieces/project1-part5c.jpg';

import ProjPicLink from '../img/home/project-01.jpg';
const ProjBg = {backgroundImage: 'url(' + ProjBgLink + ')'};
const ProjPic = {backgroundImage: 'url(' + ProjPicLink + ')'};
const ProjOnePartOne = [
  { src: ProjOnePartOneA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartOneA, }},
  { src: ProjOnePartOneB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartOneB, }},
  { src: ProjOnePartOneC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartOneC, }},
];
const ProjOnePartTwo = [
  { src: ProjOnePartTwoA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartTwoA, }},
  { src: ProjOnePartTwoB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartTwoB, }},
  { src: ProjOnePartTwoC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartTwoC, }},
];
const ProjOnePartThree = [
  { src: ProjOnePartThreeA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartThreeA, }},
  { src: ProjOnePartThreeB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartThreeB, }},
  { src: ProjOnePartThreeC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartThreeC, }},
];
const ProjOnePartFour = [
  { src: ProjOnePartFourA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartFourA, }},
  { src: ProjOnePartFourB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartFourB, }},
  { src: ProjOnePartFourC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartFourC, }},
];
const ProjOnePartFive = [
  { src: ProjOnePartFiveA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartFiveA, }},
  { src: ProjOnePartFiveB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartFiveB, }},
  { src: ProjOnePartFiveC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjOnePartFiveC, }},
];

export default class ProjectOne extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 0,
    };

    document.title = "Chart Suite";
    this.updateActiveState = this.updateActiveState.bind(this);
  }

  updateActiveState(newActive) {
    this.setState({'active': newActive});
  }

  shouldComponentUpdate(nP, nS) {
    return nS.active !== this.state.active;
  }

  onMouseOver(idx) {
    this.setState({'hover': idx});
  }

  onMouseOut() {
    this.setState({'hover': null});
  }

  compareStyles(component, idx) {
    return idx === this.state.active ? component.activeStyles : idx === this.state.hover ? component.hoverStyles : component.nonActiveStyles
  }

  render() {
    let navCount = 3;
    let navArr = [];
    for (let i = 0; i < navCount; i++) {
      navArr.push(i);
    }
    return (
      <div>
        <Nav />

        <Fullpage active={this.updateActiveState}>

          <Slide className="projSlideOne" style={ProjBg}>

            <div className="projContainer">
              <div className="projColLeft">

                <h1>Chart Suite</h1>
                <div className="projPic" style={ProjPic}></div>
                <p className="topText">A web app for creating interactive charts to easily display data and update the information in browser. Lets you add info via browser on any device, and save as a PNG image. Options of different charts and settings. All info can be edited in real time via the settings sidebar.</p>

                <TopNav className="projIndexNav">
                  {navArr.map((n, idx) => {
                  return <span key={idx} ref={n}></span>
                  }, this)}
                  <Link key={1} ref={1} className="errorLink"><button className="hvr-pulse projIndexBtn projIndexOne">CONCEPT/UX</button></Link>
                  <Link key={2} ref={2} className="errorLink"><button className="hvr-pulse projIndexBtn projIndexTwo">WIREFRAMES</button></Link>
                  <Link key={3} ref={3} className="errorLink"><button className="hvr-pulse projIndexBtn projIndexThree projIndexBreak">UI</button></Link>
                  <Link key={4} ref={4} className="errorLink"><button className="hvr-pulse projIndexBtn projIndexFour">BRANDING</button></Link>
                  <Link key={5} ref={5} className="errorLink"><button className="hvr-pulse projIndexBtn projIndexFive">FEATURES</button></Link>
                  <Link key={6} ref={6} className="errorLink"><button className="hvr-pulse projIndexBtn projIndexSix">TECH</button></Link>


                </TopNav>
              </div>
              <div className="projColRight projColRightHome">
                <h3 className="projRightHeader projRightHeaderHome tagsProjIndexSm">Tech</h3>
                <p className="tagsProjIndex tagsProjIndexSm">Sass, D3, React, Javascript, Node, PostCSS, Webpack, Sketch, Illustrator</p>
                <h3 className="projRightHeader projRightHeaderHome tagsProjIndexSm">Tags</h3>
                <p className="tagsProjIndex tagsProjIndexSm">charts, interaction, webapp, UI, presentation, live updates</p>
                <h3 className="projRightHeader projRightHeaderHome">Website</h3>
                <a href="http://chartsuite.us">
                  <p className="tagsProjIndex">chartsuite.us</p>
                </a>
              </div>
            </div>
          </Slide>


          <Slide className="projSlideTwo">
            <Element name="projects"></Element>

            <div className="projContainer projContainerTwo">
              <div className="projColLeft">
                <h1>Concept</h1>
                <p>There is a number of software tools that let you create chart presentations natively on the OS, and also many options for developers to build them in browser. However there isn’t as many options for real time editing in browser. The quick updates, high interactivity of the charts, and responsiveness add to the benefits of this concept.</p>
                 <LazyLoad height={0}><Gallery photos={ProjOnePartOne} preloadNextImage={false} /></LazyLoad>
              </div>
              <div className="projColRight">
                <h3 className="projRightHeader">Contents</h3>
                <TopNav className="projIndexNav projSideNav">
                  {navArr.map((n, idx) => { return <div key={idx} ref={n}></div>}, this)}
                  <Link key={0} ref={0}><span className="sideProjLink">INTRO</span></Link>
                  <Link key={1} ref={1}><span className="sideProjLink sideProjActive">CONCEPT</span></Link>
                  <Link key={2} ref={2}><span className="sideProjLink">WIREFRAMES</span></Link>
                  <Link key={3} ref={3}><span className="sideProjLink">UI</span></Link>
                  <Link key={4} ref={4}><span className="sideProjLink">BRANDING</span></Link>
                  <Link key={5} ref={5}><span className="sideProjLink">FEATURES</span></Link>
                  <Link key={6} ref={6}><span className="sideProjLink">TECH</span></Link>
                </TopNav>
              </div>
            </div>

          </Slide>
          <Slide className="projSlideThree">
            <div className="projContainer projContainerThree">
              <div className="projColLeft">
                <h1>Wireframes</h1>
                <p>The wireframes covered a wide range of possibilities for the chart layouts and behaviour for this project, which led an excessive amount of initial concepts. The screens mapped out were initially mapped for some extra features, and alternate behaviours. The chart editor page has quite a few options as well initially that ended up being one result.</p>
                <LazyLoad height={0}><Gallery photos={ProjOnePartTwo} preloadNextImage={false} /></LazyLoad>
              </div>
              <div className="projColRight">
                <h3 className="projRightHeader">Contents</h3>
                <TopNav className="projIndexNav projSideNav">
                  {navArr.map((n, idx) => { return <div key={idx} ref={n}></div>}, this)}
                  <Link key={0} ref={0}><span className="sideProjLink">INTRO</span></Link>
                  <Link key={1} ref={1}><span className="sideProjLink">CONCEPT</span></Link>
                  <Link key={2} ref={2}><span className="sideProjLink sideProjActive">WIREFRAMES</span></Link>
                  <Link key={3} ref={3}><span className="sideProjLink">UI</span></Link>
                  <Link key={4} ref={4}><span className="sideProjLink">BRANDING</span></Link>
                  <Link key={5} ref={5}><span className="sideProjLink">FEATURES</span></Link>
                  <Link key={6} ref={6}><span className="sideProjLink">TECH</span></Link>
                </TopNav>
              </div>
            </div>
          </Slide>
          <Slide className="projSlideFour">
            <div className="projContainer projContainerFour">
              <div className="projColLeft">
                <h1>UI</h1>
                <p>As with the wireframes, the UI mockups for this project initially were extensive. The mockups reduced a few of the ideas in wireframes, and helped to hone down and focus on the important layouts for the initial version of the web app. This stage also had some refactoring of the layout for the same reason. In this stage other responsive elements were worked out, as well as finalizing the chart editor.</p>
                <LazyLoad height={0}><Gallery photos={ProjOnePartThree} preloadNextImage={false} /></LazyLoad>
              </div>
              <div className="projColRight">
                <h3 className="projRightHeader">Contents</h3>
                <TopNav className="projIndexNav projSideNav">
                  {navArr.map((n, idx) => { return <div key={idx} ref={n}></div>}, this)}
                  <Link key={0} ref={0}><span className="sideProjLink">INTRO</span></Link>
                  <Link key={1} ref={1}><span className="sideProjLink">CONCEPT</span></Link>
                  <Link key={2} ref={2}><span className="sideProjLink">WIREFRAMES</span></Link>
                  <Link key={3} ref={3}><span className="sideProjLink sideProjActive">UI</span></Link>
                  <Link key={4} ref={4}><span className="sideProjLink">BRANDING</span></Link>
                  <Link key={5} ref={5}><span className="sideProjLink">FEATURES</span></Link>
                  <Link key={6} ref={6}><span className="sideProjLink">TECH</span></Link>
                </TopNav>
              </div>
            </div>
          </Slide>
          <Slide className="projSlideFive">
            <div className="projContainer projContainerFive">
              <div className="projColLeft">
                <h1>Branding</h1>
                <p>The main goal for the branding of this project is to visually simplify the users data into something easily digestible, while of course looking good simultaniously. The process work for the logo had some predictable chart type solutions, and some abstract idea progression. The best outcome from this came with a geometric shape resembling a few different charts combined. An in between of the obvious chart type logo, and some nice looking abstract geometric shapes.</p>
                <LazyLoad height={0}><Gallery photos={ProjOnePartFour} preloadNextImage={false} /></LazyLoad>
              </div>
              <div className="projColRight">
                <h3 className="projRightHeader">Contents</h3>
                <TopNav className="projIndexNav projSideNav">
                  {navArr.map((n, idx) => { return <div key={idx} ref={n}></div>}, this)}
                  <Link key={0} ref={0}><span className="sideProjLink">INTRO</span></Link>
                  <Link key={1} ref={1}><span className="sideProjLink">CONCEPT</span></Link>
                  <Link key={2} ref={2}><span className="sideProjLink">WIREFRAMES</span></Link>
                  <Link key={3} ref={3}><span className="sideProjLink">UI</span></Link>
                  <Link key={4} ref={4}><span className="sideProjLink sideProjActive">BRANDING</span></Link>
                  <Link key={5} ref={5}><span className="sideProjLink">FEATURES</span></Link>
                  <Link key={6} ref={6}><span className="sideProjLink">TECH</span></Link>
                </TopNav>
              </div>
            </div>
          </Slide>
          <Slide className="projSlideSix">
            <div className="projContainer projContainerSix">
              <div className="projColLeft">
                <h1>Features</h1>
                <p>Layout options were built with re useable components to be added throughout the layouts, and possible future layouts. The charts themselves have extensive interactivity that adjust in real time to the user input. The data is also displayed with a high level of interaction on hover/touch events. Forms and buttons have a high level of contract and some basic animations for ease of navigation.</p>
                <LazyLoad height={0}><Gallery photos={ProjOnePartFive} preloadNextImage={false} /></LazyLoad>
              </div>
              <div className="projColRight">
                <h3 className="projRightHeader">Contents</h3>
                <TopNav className="projIndexNav projSideNav">
                  {navArr.map((n, idx) => { return <div key={idx} ref={n}></div>}, this)}
                  <Link key={0} ref={0}><span className="sideProjLink">INTRO</span></Link>
                  <Link key={1} ref={1}><span className="sideProjLink">CONCEPT</span></Link>
                  <Link key={2} ref={2}><span className="sideProjLink">WIREFRAMES</span></Link>
                  <Link key={3} ref={3}><span className="sideProjLink">UI</span></Link>
                  <Link key={4} ref={4}><span className="sideProjLink">BRANDING</span></Link>
                  <Link key={5} ref={5}><span className="sideProjLink sideProjActive">FEATURES</span></Link>
                  <Link key={6} ref={6}><span className="sideProjLink">TECH</span></Link>
                </TopNav>
              </div>
            </div>
          </Slide>
          <Slide className="projSlideSeven">
            <div className="projContainer projContainerSeven">
              <div className="projColLeft">
                <h1>Tech</h1>
                <p>The project is built with a nodeJS server for a speed and to use many popular front end javascript tools easily. The app itself consists of components with functionality built in React JS, and some external libraries. The charts themselves use a react component chart library called Recharts. The styling used involved a collection of PostCSS plugins and SASS mixins for layout and re useable CSS parts. All mockups were created in Sketch, Branding/Concepts built in Adobe Illustrator, and photo editing done with Adobe Photoshop.</p>

                <ReactTooltip />

                <img src={Sass} className="techIcon" data-tip="Sass" data-effect="solid"/>
                <img src={DThree} className="techIcon" data-tip="D3" data-effect="solid"/>
                <img src={ReactJs} className="techIcon" data-tip="React" data-effect="solid"/>
                <img src={Javascript} className="techIcon" data-tip="Javascript" data-effect="solid"/>
                <img src={NodeJs} className="techIcon" data-tip="Node" data-effect="solid"/>
                <img src={PostCss} className="techIcon" data-tip="PostCSS" data-effect="solid"/>
                <img src={Webpack} className="techIcon" data-tip="Webpack" data-effect="solid"/>
                <img src={Sketch} className="techIcon" data-tip="Sketch" data-effect="solid"/>
                <img src={Illustrator} className="techIcon" data-tip="Illustrator" data-effect="solid"/>

                <br />
                <h3>projects</h3>
                {/* <Link to="terminal-ui" className="errorLink"><button className="hvr-pulse projIndexBtn">TECH</button></Link> */}
                <Link to="terminal-ui" className="errorLink"><button className="hvr-pulse projIndexBtn">NEXT &gt;&gt;</button></Link>
              </div>
              <div className="projColRight">
                <h3 className="projRightHeader">Contents</h3>
                <TopNav className="projIndexNav projSideNav">
                  {navArr.map((n, idx) => { return <div key={idx} ref={n}></div>}, this)}
                  <Link key={0} ref={0}><span className="sideProjLink">INTRO</span></Link>
                  <Link key={1} ref={1}><span className="sideProjLink">CONCEPT</span></Link>
                  <Link key={2} ref={2}><span className="sideProjLink">WIREFRAMES</span></Link>
                  <Link key={3} ref={3}><span className="sideProjLink">UI</span></Link>
                  <Link key={4} ref={4}><span className="sideProjLink">BRANDING</span></Link>
                  <Link key={5} ref={5}><span className="sideProjLink">FEATURES</span></Link>
                  <Link key={6} ref={6}><span className="sideProjLink sideProjActive">TECH</span></Link>
                </TopNav>
              </div>
            </div>
          </Slide>



        </Fullpage>

      </div>
    )
  }
}
