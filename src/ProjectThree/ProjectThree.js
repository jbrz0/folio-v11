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
import Wordpress from '../img/tech/wordpress.png';
import Javascript from '../img/tech/js.png';
import Php from '../img/tech/php.png';
import Css from '../img/tech/css.png';
import Html from '../img/tech/html.png';
import Litmus from '../img/tech/litmus.png';
import Sketch from '../img/tech/sketch.png';
import Illustrator from '../img/tech/illustrator.png';
import Photoshop from '../img/tech/photoshop.png';

// Gallery Images

import ProjThreePartOneA from '../img/pieces/project3-part1a.jpg';
import ProjThreePartOneB from '../img/pieces/project3-part1b.jpg';
import ProjThreePartOneC from '../img/pieces/project3-part1c.jpg';
import ProjThreePartTwoA from '../img/pieces/project3-part2a.jpg';
import ProjThreePartTwoB from '../img/pieces/project3-part2b.jpg';
import ProjThreePartTwoC from '../img/pieces/project3-part2c.jpg';
import ProjThreePartThreeA from '../img/pieces/project3-part4a.jpg';
import ProjThreePartThreeB from '../img/pieces/project3-part4b.jpg';
import ProjThreePartThreeC from '../img/pieces/project3-part4c.jpg';
import ProjThreePartFourA from '../img/pieces/project3-part3a.jpg';
import ProjThreePartFourB from '../img/pieces/project3-part3b.jpg';
import ProjThreePartFourC from '../img/pieces/project3-part3c.jpg';
import ProjThreePartFiveA from '../img/pieces/project3-part5a.jpg';
import ProjThreePartFiveB from '../img/pieces/project3-part5b.jpg';
import ProjThreePartFiveC from '../img/pieces/project3-part5c.jpg';

import ProjPicLink from '../img/home/project-03.jpg';
const ProjBg = {backgroundImage: 'url(' + ProjBgLink + ')'};
const ProjPic = {backgroundImage: 'url(' + ProjPicLink + ')'};
const ProjThreePartOne = [
  { src: ProjThreePartOneA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartOneA, }},
  { src: ProjThreePartOneB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartOneB, }},
  { src: ProjThreePartOneC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartOneC, }},
];
const ProjThreePartTwo = [
  { src: ProjThreePartTwoA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartTwoA, }},
  { src: ProjThreePartTwoB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartTwoB, }},
  { src: ProjThreePartTwoC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartTwoC, }},
];
const ProjThreePartThree = [
  { src: ProjThreePartThreeA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartThreeA, }},
  { src: ProjThreePartThreeB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartThreeB, }},
  { src: ProjThreePartThreeC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartThreeC, }},
];
const ProjThreePartFour = [
  { src: ProjThreePartFourA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartFourA, }},
  { src: ProjThreePartFourB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartFourB, }},
  { src: ProjThreePartFourC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartFourC, }},
];
const ProjThreePartFive = [
  { src: ProjThreePartFiveA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartFiveA, }},
  { src: ProjThreePartFiveB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartFiveB, }},
  { src: ProjThreePartFiveC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartFiveC, }},
];

export default class ProjectThree extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 0,
    };

    document.title = "Homes From The Future";
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

                <h1>Homes From The Future</h1>
                <div className="projPic" style={ProjPic}></div>
                <p className="topText">Homes from the Future is an active tech blog dedicated to home automation and the internet of things. With a detailed product review page, and article page housed in a distinctly styled blog.</p>

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
                <p className="tagsProjIndex tagsProjIndexSm">Wordpress, Javascript, PHP, CSS, HTML, Litmus, Sketch, Illustrator, Photoshop</p>
                <h3 className="projRightHeader projRightHeaderHome tagsProjIndexSm">Tags</h3>
                <p className="tagsProjIndex tagsProjIndexSm">blog, tech, internet of things, home automation, news</p>
                <h3 className="projRightHeader projRightHeaderHome">Website</h3>
                <a href="http://homesfromthefuture.com">
                  <p className="tagsProjIndex">homesfromthefuture.com</p>
                </a>
              </div>
            </div>
          </Slide>


          <Slide className="projSlideTwo">
            <Element name="projects"></Element>

            <div className="projContainer projContainerTwo">
              <div className="projColLeft">
                <h1>Concept</h1>
                <p>The goal of the blog is to simplify these emerging fields and showcase in a clear and direct way the benefits of the products and services that exist. The process of building a “smart home” is one thats growing in popularity and potential, which was also one of the main reasons this blog was created.</p>
                 <LazyLoad height={0}><Gallery photos={ProjThreePartOne} preloadNextImage={false} /></LazyLoad>
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
                <p>The main goal of the wireframes was to house many different media types and large amounts of text in an informative and clear way. The navigation elements are separated from the post content on layouts to aid with navigation. The iterations varied throughout the wireframing, mockups and even development process for this project, based on the best suited way to display product and article info.</p>
                <LazyLoad height={0}><Gallery photos={ProjThreePartTwo} preloadNextImage={false} /></LazyLoad>
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
                <p>Interface elements use a modern and clean stylistic approach combining the brand style and wireframe layouts. Housing the content in boxes helped to use whitespace to separate elements, and the branding colours/styles helped to further this idea. Mobile layouts re-organize the sidebars to work below the content, and let the content be the main focus. This stage also involved a lot of refactoring to the product template (which later went through further revisions in the development stage).</p>
                <LazyLoad height={0}><Gallery photos={ProjThreePartThree} preloadNextImage={false} /></LazyLoad>
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
                <p>The branding imagery and style for this project was based on technology and connectedness, as this is displayed prominently in the logo especially. The button and element styling uses playful colours and clean text to also make the topic of “home automation” seem inviting and fun rather than overwhelming. The header typography uses a monospace font to mimic a typewriter style, to add some extra originality to the overall layouts.</p>
                <LazyLoad height={0}><Gallery photos={ProjThreePartFour} preloadNextImage={false} /></LazyLoad>
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
                <p>Post page features bold and enlarged media elements, that behave well between screen sizes. The menu contains a modal with many features for navigation through the website, with all elements being enlarged on most screen sizes to optimize the interactivity. Contains a separated post template to highlight features of the product, and article template which is better suited for longer text articles about guides and concepts.</p>
                <LazyLoad height={0}><Gallery photos={ProjThreePartFive} preloadNextImage={false} /></LazyLoad>
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
                <p>Build on wordpress, with a custom theme built into it from scratch. The theme uses some custom plugins for post management, and some pre built plugins for Mailchimp, analytics, and content management. Images are optimized for speed and styling is written with vanilla CSS, using some features from BEM methodology, and well structured content organization in the theme style files. Theme functionality also has many customized elements using PHP for content, layout, and data organization.</p>

                <ReactTooltip />

                <img src={Wordpress} className="techIcon" data-tip="Wordpress" data-effect="solid"/>
                <img src={Javascript} className="techIcon" data-tip="Javascript" data-effect="solid"/>
                <img src={Php} className="techIcon" data-tip="PHP" data-effect="solid"/>
                <img src={Html} className="techIcon" data-tip="HTML" data-effect="solid"/>
                <img src={Css} className="techIcon" data-tip="CSS" data-effect="solid"/>
                <img src={Litmus} className="techIcon" data-tip="Litmus" data-effect="solid"/>
                <img src={Sketch} className="techIcon" data-tip="Sketch" data-effect="solid"/>
                <img src={Illustrator} className="techIcon" data-tip="Illustrator" data-effect="solid"/>
                <img src={Photoshop} className="techIcon" data-tip="Photoshop" data-effect="solid"/>

                <br />
                <h3>projects</h3>
                <Link to="terminal-ui" className="errorLink"><button className="hvr-pulse projIndexBtn">&lt;&lt; PREV</button></Link>
                <Link to="odd-scenes" className="errorLink"><button className="hvr-pulse projIndexBtn">NEXT &gt;&gt;</button></Link>
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
