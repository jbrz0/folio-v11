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
import ReactJs from '../img/tech/react.png';
import Javascript from '../img/tech/js.png';
import NodeJs from '../img/tech/nodejs.png';
import PostCss from '../img/tech/postcss.png';
import Webpack from '../img/tech/webpack.png';
import Sketch from '../img/tech/sketch.png';
import Illustrator from '../img/tech/illustrator.png';
import Photoshop from '../img/tech/photoshop.png';

// Gallery Images

import ProjFivePartOneA from '../img/pieces/project5-part1a.jpg';
import ProjFivePartOneB from '../img/pieces/project5-part1b.jpg';
import ProjFivePartOneC from '../img/pieces/project5-part1c.jpg';
import ProjFivePartTwoA from '../img/pieces/project5-part2a.jpg';
import ProjFivePartTwoB from '../img/pieces/project5-part2b.jpg';
import ProjFivePartTwoC from '../img/pieces/project5-part2c.jpg';
import ProjFivePartThreeA from '../img/pieces/project5-part4a.jpg';
import ProjFivePartThreeB from '../img/pieces/project5-part4b.jpg';
import ProjFivePartThreeC from '../img/pieces/project5-part4c.jpg';
import ProjFivePartFourA from '../img/pieces/project5-part3a.jpg';
import ProjFivePartFourB from '../img/pieces/project5-part3b.jpg';
import ProjFivePartFourC from '../img/pieces/project5-part3c.jpg';
import ProjFivePartFiveA from '../img/pieces/project5-part5a.jpg';
import ProjFivePartFiveB from '../img/pieces/project5-part5b.jpg';
import ProjFivePartFiveC from '../img/pieces/project5-part5c.jpg';

import ProjPicLink from '../img/home/project-05.jpg';
const ProjBg = {backgroundImage: 'url(' + ProjBgLink + ')'};
const ProjPic = {backgroundImage: 'url(' + ProjPicLink + ')'};
const ProjFivePartOne = [
  { src: ProjFivePartOneA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartOneA, }},
  { src: ProjFivePartOneB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartOneB, }},
  { src: ProjFivePartOneC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartOneC, }},
];
const ProjFivePartTwo = [
  { src: ProjFivePartTwoA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartTwoA, }},
  { src: ProjFivePartTwoB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartTwoB, }},
  { src: ProjFivePartTwoC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartTwoC, }},
];
const ProjFivePartThree = [
  { src: ProjFivePartThreeA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartThreeA, }},
  { src: ProjFivePartThreeB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartThreeB, }},
  { src: ProjFivePartThreeC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartThreeC, }},
];
const ProjFivePartFour = [
  { src: ProjFivePartFourA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartFourA, }},
  { src: ProjFivePartFourB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartFourB, }},
  { src: ProjFivePartFourC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartFourC, }},
];
const ProjFivePartFive = [
  { src: ProjFivePartFiveA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartFiveA, }},
  { src: ProjFivePartFiveB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartFiveB, }},
  { src: ProjFivePartFiveC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartFiveC, }},
];

export default class ProjectFive extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 0,
    };

    document.title = "WallTagged";
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

                <h1>WallTagged</h1>
                <div className="projPic" style={ProjPic}></div>
                <p className="topText">An interactive drawing app consisting of drawing tools, and templates to draw over. This app version contains a set of tools able to be used on any device with touch or mouse, exportable as export as a PNG.</p>

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
                <p className="tagsProjIndex tagsProjIndexSm">Sass, React, Javascript, Node, PostCSS, Webpack, Sketch, Illustrator, Photoshop</p>
                <h3 className="projRightHeader projRightHeaderHome tagsProjIndexSm">Tags</h3>
                <p className="tagsProjIndex tagsProjIndexSm">canvas, art, tools, drawing, graffiti</p>
                <h3 className="projRightHeader projRightHeaderHome">Website</h3>
                <Link to="http://justinbrazeau.com/walltagged">
                  <p className="tagsProjIndex">justinbrazeau.com/walltagged</p>
                </Link>
              </div>
            </div>
          </Slide>


          <Slide className="projSlideTwo">
            <Element name="projects"></Element>

            <div className="projContainer projContainerTwo">
              <div className="projColLeft">
                <h1>Concept</h1>
                <p>the concept behind this project is to have a fun way to draw in browser with a number of modern web development tools. The responsiveness and ease of use allow for a fun tool to play with and save artwork on. The name of the app is based off of a graffiti term, treating the blank canvas in the app as a wall that you paint on.</p>
                 <LazyLoad height={0}><Gallery photos={ProjFivePartOne} preloadNextImage={false} /></LazyLoad>
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
                <p>The first step of this project was to map out all the main screens and devices sizes. Also this stage first had a focus on the editor functionality and layout options. This stage had a couple iterations as well on the built wireframes after review, and research of good ways to best use the layout. The flow of the wireframes was built in this stage and also re-hashed, before selecting the best candidates for the UI mockups.</p>
                <LazyLoad height={0}><Gallery photos={ProjFivePartTwo} preloadNextImage={false} /></LazyLoad>
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
                <p>From the iterations built in the wireframes, and branding styling, more re arranging and application of brand style was put into the UI mockups. The bold branding style was put into the elements to guide the user to the necessary features of the app. The welcome page is also designed to showcase quickly and guide the user to the drawing app or drawing templates.</p>
                <LazyLoad height={0}><Gallery photos={ProjFivePartThree} preloadNextImage={false} /></LazyLoad>
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
                <p>The initial ideas for the branding styles are based on graffiti, playful colours and urban feel to it. The sharp edges of the elements, bold typography, and loud colourful images/content everywhere add to this style. The logo development process involved iconography associated with paint, art, urban, graffiti. It ended up as a word mark incorporating paint trails on a rounded “wall” or canvas.</p>
                <LazyLoad height={0}><Gallery photos={ProjFivePartFour} preloadNextImage={false} /></LazyLoad>
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
                <p>Canvas has quick responsive behaviour to click or touch on any device its used on. Template files can be loaded in the background to paint over. Ability to export multiple pngs of canvas in the same session. Canvas editor features a drawer of tools that minimize and get out of the canvas area when minimized.</p>
                <LazyLoad height={0}><Gallery photos={ProjFivePartFive} preloadNextImage={false} /></LazyLoad>
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
                <p>The app us built with responsive Javascript and CSS components built with a nodeJS server. The components use React JS for the drawing app editor which allow for a high level of interactivity with event detection and state manipulation. The responsive behaviour, layout and theming was built using Sass, with flex box grid for the much of the layout. The UI incorporates some material design components from the React JS library Material UI.</p>

                <ReactTooltip />

                <img src={Sass} className="techIcon" data-tip="Sass" data-effect="solid"/>
                <img src={ReactJs} className="techIcon" data-tip="React" data-effect="solid"/>
                <img src={Javascript} className="techIcon" data-tip="Javascript" data-effect="solid"/>
                <img src={NodeJs} className="techIcon" data-tip="NodeJS" data-effect="solid"/>
                <img src={PostCss} className="techIcon" data-tip="PostCSS" data-effect="solid"/>
                <img src={Webpack} className="techIcon" data-tip="Webpack" data-effect="solid"/>
                <img src={Sketch} className="techIcon" data-tip="Sketch" data-effect="solid"/>
                <img src={Illustrator} className="techIcon" data-tip="Illustrator" data-effect="solid"/>
                <img src={Photoshop} className="techIcon" data-tip="Photoshop" data-effect="solid"/>

                <br />
                <h3>projects</h3>
                <Link to="odd-scenes" className="errorLink"><button className="hvr-pulse projIndexBtn">&lt;&lt; PREV</button></Link>
                <Link to="gold-tooth" className="errorLink"><button className="hvr-pulse projIndexBtn">NEXT &gt;&gt;</button></Link>
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
