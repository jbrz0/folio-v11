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

import ProjFourPartOneA from '../img/pieces/project4-part1a.jpg';
import ProjFourPartOneB from '../img/pieces/project4-part1b.jpg';
import ProjFourPartOneC from '../img/pieces/project4-part1c.jpg';
import ProjFourPartTwoA from '../img/pieces/project4-part2a.jpg';
import ProjFourPartTwoB from '../img/pieces/project4-part2b.jpg';
import ProjFourPartTwoC from '../img/pieces/project4-part2c.jpg';
import ProjFourPartThreeA from '../img/pieces/project4-part4a.jpg';
import ProjFourPartThreeB from '../img/pieces/project4-part4b.jpg';
import ProjFourPartThreeC from '../img/pieces/project4-part4c.jpg';
import ProjFourPartFourA from '../img/pieces/project4-part3a.jpg';
import ProjFourPartFourB from '../img/pieces/project4-part3b.jpg';
import ProjFourPartFourC from '../img/pieces/project4-part3c.jpg';
import ProjFourPartFiveA from '../img/pieces/project4-part5a.jpg';
import ProjFourPartFiveB from '../img/pieces/project4-part5b.jpg';
import ProjFourPartFiveC from '../img/pieces/project4-part5c.jpg';

import ProjPicLink from '../img/home/project-04.jpg';
const ProjBg = {backgroundImage: 'url(' + ProjBgLink + ')'};
const ProjPic = {backgroundImage: 'url(' + ProjPicLink + ')'};
const ProjFourPartOne = [
  { src: ProjFourPartOneA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartOneA, }},
  { src: ProjFourPartOneB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartOneB, }},
  { src: ProjFourPartOneC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartOneC, }},
];
const ProjFourPartTwo = [
  { src: ProjFourPartTwoA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartTwoA, }},
  { src: ProjFourPartTwoB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartTwoB, }},
  { src: ProjFourPartTwoC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartTwoC, }},
];
const ProjFourPartThree = [
  { src: ProjFourPartThreeA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartThreeA, }},
  { src: ProjFourPartThreeB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartThreeB, }},
  { src: ProjFourPartThreeC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartThreeC, }},
];
const ProjFourPartFour = [
  { src: ProjFourPartFourA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartFourA, }},
  { src: ProjFourPartFourB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartFourB, }},
  { src: ProjFourPartFourC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartFourC, }},
];
const ProjFourPartFive = [
  { src: ProjFourPartFiveA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartFiveA, }},
  { src: ProjFourPartFiveB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartFiveB, }},
  { src: ProjFourPartFiveC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartFiveC, }},
];

export default class ProjectFour extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 0,
    };

    document.title = "Odd Scenes";
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

                <h1>Odd Scenes</h1>
                <div className="projPic" style={ProjPic}></div>
                <p className="topText">A unique layout media website, as a showcase and commerce hub for a digital illustration brand. The layout arranges elements to break a standard grid format, and showcase all the products & art pieces.</p>

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
                <p className="tagsProjIndex tagsProjIndexSm">digital art, illustration, shop, clothing, showcase</p>
                <h3 className="projRightHeader projRightHeaderHome">Website</h3>
                <Link to="http://justinbrazeau.com/oddscenes">
                  <p className="tagsProjIndex">justinbrazeau.com/oddscenes</p>
                </Link>
              </div>
            </div>
          </Slide>


          <Slide className="projSlideTwo">
            <Element name="projects"></Element>

            <div className="projContainer projContainerTwo">
              <div className="projColLeft">
                <h1>Concept</h1>
                <p>Odd Scenes is a bold digital style and media company, and the main website needed to be a relevant showcase for this. It will need to house recent work, display high res images, optimized for efficient load times, and populate a shop section from work uploaded to an external shop page. The other main focus is to direct the user to other social media platforms for the brand.</p>
                 <LazyLoad height={0}><Gallery photos={ProjFourPartOne} preloadNextImage={false} /></LazyLoad>
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
                <p>The first step of these wireframes was mapping out all the main layouts for the sections on the site. Knowing it will be a one page, scrolling website there was a couple iterations of the layout made, as well as some experimental external shop page templates. From there revisions were made and altered versions were made.</p>
                <LazyLoad height={0}><Gallery photos={ProjFourPartTwo} preloadNextImage={false} /></LazyLoad>
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
                <p>At this stage the decision of what artwork to add as the floating elements to the chosen layouts was made, as well as the best flow/layout to go with. The elements used the bright colours to pop out of the layout and give each section a distinct call to action. More of the text and flow was mapped out also in this stage, after incorporating the developed branding style.</p>
                <LazyLoad height={0}><Gallery photos={ProjFourPartThree} preloadNextImage={false} /></LazyLoad>
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
                <p>The brand itself is built on style incorporating abstracted shapes, bright colours and sometimes using different media/technology to make its pieces. The logo plays on this with a chaotic layout of some basic shapes, the same way the illustration elements are made. The colours and shapes use a bold turquoise and purple combination that were initially being used years ago as its colours, with more accents and shading being added to the palette.</p>
                <LazyLoad height={0}><Gallery photos={ProjFourPartFour} preloadNextImage={false} /></LazyLoad>
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
                <p>High quality images optimized and compressed to load fast and display well. Responsive behaviour of unique style grids flows well into smaller screens. Shop page, modal loads up a menu with information and a bold direct link to product.</p>
                <LazyLoad height={0}><Gallery photos={ProjFourPartFive} preloadNextImage={false} /></LazyLoad>
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
                <p>A lightweight nodeJS app built with Sass and ReactJS as its main front end tools. Using a fairly basic setup with some PostCSS plugins for extra layout design and automation. Modules build into an optimized, minified single page application with a modified webpack setup. Some extra NPM packages also used as a basis for modals, and other ui elements.</p>

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
                <Link to="homes-from-the-future" className="errorLink"><button className="hvr-pulse projIndexBtn">&lt;&lt; PREV</button></Link>
                <Link to="walltagged" className="errorLink"><button className="hvr-pulse projIndexBtn">NEXT &gt;&gt;</button></Link>
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
