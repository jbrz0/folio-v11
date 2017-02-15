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

// Gallery Images

import ProjTwoPartOneA from '../img/pieces/project2-part1a.jpg';
import ProjTwoPartOneB from '../img/pieces/project2-part1b.jpg';
import ProjTwoPartOneC from '../img/pieces/project2-part1c.jpg';
import ProjTwoPartTwoA from '../img/pieces/project2-part2a.jpg';
import ProjTwoPartTwoB from '../img/pieces/project2-part2b.jpg';
import ProjTwoPartTwoC from '../img/pieces/project2-part2c.jpg';
import ProjTwoPartThreeA from '../img/pieces/project2-part4a.jpg';
import ProjTwoPartThreeB from '../img/pieces/project2-part4b.jpg';
import ProjTwoPartThreeC from '../img/pieces/project2-part4c.jpg';
import ProjTwoPartFourA from '../img/pieces/project2-part3a.jpg';
import ProjTwoPartFourB from '../img/pieces/project2-part3b.jpg';
import ProjTwoPartFourC from '../img/pieces/project2-part3c.jpg';
import ProjTwoPartFiveA from '../img/pieces/project2-part5a.jpg';
import ProjTwoPartFiveB from '../img/pieces/project2-part5b.jpg';
import ProjTwoPartFiveC from '../img/pieces/project2-part5c.jpg';

import ProjPicLink from '../img/home/project-02.jpg';
const ProjBg = {backgroundImage: 'url(' + ProjBgLink + ')'};
const ProjPic = {backgroundImage: 'url(' + ProjPicLink + ')'};
const ProjTwoPartOne = [
  { src: ProjTwoPartOneA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartOneA, }},
  { src: ProjTwoPartOneB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartOneB, }},
  { src: ProjTwoPartOneC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartOneC, }},
];
const ProjTwoPartTwo = [
  { src: ProjTwoPartTwoA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartTwoA, }},
  { src: ProjTwoPartTwoB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartTwoB, }},
  { src: ProjTwoPartTwoC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartTwoC, }},
];
const ProjTwoPartThree = [
  { src: ProjTwoPartThreeA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartThreeA, }},
  { src: ProjTwoPartThreeB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartThreeB, }},
  { src: ProjTwoPartThreeC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartThreeC, }},
];
const ProjTwoPartFour = [
  { src: ProjTwoPartFourA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartFourA, }},
  { src: ProjTwoPartFourB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartFourB, }},
  { src: ProjTwoPartFourC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartFourC, }},
];
const ProjTwoPartFive = [
  { src: ProjTwoPartFiveA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartFiveA, }},
  { src: ProjTwoPartFiveB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartFiveB, }},
  { src: ProjTwoPartFiveC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartFiveC, }},
];

export default class ProjectTwo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 0,
    };

    document.title = "Terminal UI Kit";
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

                <h1>Terminal UI Kit</h1>
                <div className="projPic" style={ProjPic}></div>
                <p className="topText">Taking inspiration from terminal navigation on computers in the past/present, this UI Kit is a collection of ReactJS components to integrate into a website or app. The components fit nicely in the pre-built grid, with a number of different column options. Contains a range of different cards to be inserted into the grid setup, with interactivity and animations built in.</p>

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
                <p className="tagsProjIndex tagsProjIndexSm">Sass, React, Javascript, Node, PostCSS, Webpack, Sketch, Illustrator</p>
                <h3 className="projRightHeader projRightHeaderHome tagsProjIndexSm">Tags</h3>
                <p className="tagsProjIndex tagsProjIndexSm">terminal, scifi, ui kit, library, components</p>
                <h3 className="projRightHeader projRightHeaderHome">Website</h3>
                <Link to="http://terminalui.info">
                  <p className="tagsProjIndex">terminalui.info</p>
                </Link>
              </div>
            </div>
          </Slide>


          <Slide className="projSlideTwo">
            <Element name="projects"></Element>

            <div className="projContainer projContainerTwo">
              <div className="projColLeft">
                <h1>Concept</h1>
                <p>The original concept is built off the idea of a terminal interface used to navigate screens via type. This is something that isn’t used as much in web, and this kit explores it as a navigation option. It also uses a few other concepts incorporated in the UI Library including highly reusable cards that can be placed in a grid layout easily and responsively. The main goal was to provide a pre built solution to easily achieve this and have a large list of components all themed and behaving in a coherent way.</p>
                 <LazyLoad height={0}><Gallery photos={ProjTwoPartOne} preloadNextImage={false} /></LazyLoad>
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
                <p>The wireframe development process for this project involved a lot of experimenting with sizing/layout options for different cards to be inserted into the grid layout. The first step was building a versatile grid system, then building all the necessary components that would be useful for a version release of the UI kit. Then options were developed for input navigation and re-iterations of all items. </p>
                <LazyLoad height={0}><Gallery photos={ProjTwoPartTwo} preloadNextImage={false} /></LazyLoad>
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
                <p>The re factored UI mockups are re adjusted and in this stage added a few more responsive behaviours of the cards themselves. The integration of the branding style into the elements helped to adjust the main layout and card contents. This stage also helped to use the previously built elements to focus on a few key layouts and flow of the project.</p>
                <LazyLoad height={0}><Gallery photos={ProjTwoPartThree} preloadNextImage={false} /></LazyLoad>
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
                <p>Overall style of the kit library is built on a terminal, slightly sci-fi theme, with old fashioned terminal use elements mixed with modern web development layout and style techniques. The colours incorporate a colour mix while still maintaining this look, as well as thin, futuristic looking typography. The logo (as well as colours and other elements) are meant to be swapped, but aim to provide a good base with this library. The final logo option for this project uses a T icon with a retro/futuristic  style using a bold T and word mark of the word ‘Terminal’.</p>
                <LazyLoad height={0}><Gallery photos={ProjTwoPartFour} preloadNextImage={false} /></LazyLoad>
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
                <p>The library makes use of two different window behaviours, slideshow featuring specific cards - or scrolling with many cards. The ability to easily add terminal commands attached to pages built in, including multiple queries for the same page (ex: Home, Welcome, 0 can all load /home layout). responsive customized grid, for easily fitting in card designs. </p>
                <LazyLoad height={0}><Gallery photos={ProjTwoPartFive} preloadNextImage={false} /></LazyLoad>
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
                <p>The main card components are built as ReactJS and Sass components completely pre built. The Sass files contain variables to adjust the theme files to new branding elements. Developer version currently exists with these files, and also a design files version built with Adobe Illustrator and Sketch. The cards use a PostCSS plugin called Lost for extensive flex box grids to be used, combined with pre designed structures that were developed into Javascript and CSS files after.</p>

                <ReactTooltip />

                <img src={Sass} className="techIcon" data-tip="Sass" data-effect="solid"/>
                <img src={ReactJs} className="techIcon" data-tip="React" data-effect="solid"/>
                <img src={Javascript} className="techIcon" data-tip="Javascript" data-effect="solid"/>
                <img src={NodeJs} className="techIcon" data-tip="Node" data-effect="solid"/>
                <img src={PostCss} className="techIcon" data-tip="PostCSS" data-effect="solid"/>
                <img src={Webpack} className="techIcon" data-tip="Webpack" data-effect="solid"/>
                <img src={Sketch} className="techIcon" data-tip="Sketch" data-effect="solid"/>
                <img src={Illustrator} className="techIcon" data-tip="Illustrator" data-effect="solid"/>

                <br />
                <h3>projects</h3>
                <Link to="chart-suite" className="errorLink"><button className="hvr-pulse projIndexBtn">&lt;&lt; PREV</button></Link>
                <Link to="homes-from-the-future" className="errorLink"><button className="hvr-pulse projIndexBtn">NEXT &gt;&gt;</button></Link>
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
