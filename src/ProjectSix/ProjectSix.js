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
import ReactNative from '../img/tech/reactNative.png';
import Javascript from '../img/tech/js.png';
import NodeJs from '../img/tech/nodejs.png';
import Webpack from '../img/tech/webpack.png';
import Sketch from '../img/tech/sketch.png';
import Illustrator from '../img/tech/illustrator.png';
import Photoshop from '../img/tech/photoshop.png';

// Gallery Images

const ProjSixPartOneA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e71dec49117053.58abb3dfa3cbf.jpg';
const ProjSixPartTwoA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/59147f49117053.58abb3dfa3139.jpg';
const ProjSixPartTwoB = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1da4c449117053.58abb3dfa45b1.jpg';
const ProjSixPartThreeA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/27a79849117053.58abb3dfa3967.jpg';
const ProjSixPartFourA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/21f9cb49117053.58abb3dfa2a1b.jpg';
const ProjSixPartFourB = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/af94f349117053.58abbf1b028eb.png';
const ProjSixPartFiveA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/74738249117053.58abbf1b01c24.jpg';
import ProjSixPartFiveB from '../img/pieces/gold-7.jpg';

import ProjPicLink from '../img/home/project-06.jpg';
const ProjBg = {backgroundImage: 'url(' + ProjBgLink + ')'};
const ProjPic = {backgroundImage: 'url(' + ProjPicLink + ')'};
const ProjSixPartOne = [
  { src: ProjSixPartOneA, width: 192, height: 120, aspectRatio: 1, lightboxImage: { src: ProjSixPartOneA, }},
];
const ProjSixPartTwo = [
  { src: ProjSixPartTwoA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjSixPartTwoA, }},
  { src: ProjSixPartTwoB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjSixPartTwoB, }},
];
const ProjSixPartThree = [
  { src: ProjSixPartThreeA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjSixPartThreeA, }},
];
const ProjSixPartFour = [
  { src: ProjSixPartFourA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjSixPartFourA, }},
  { src: ProjSixPartFourB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjSixPartFourB, }},
];
const ProjSixPartFive = [
  { src: ProjSixPartFiveA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjSixPartFiveA, }},
  { src: ProjSixPartFiveB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjSixPartFiveB, }},
];

export default class ProjectSix extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 0,
    };

    document.title = "Gold Tooth";
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

                <h1>Gold Tooth</h1>
                <div className="projPic" style={ProjPic}></div>
                <p className="topText">Gold Tooth is a mobile UI kit, consisting of design files and iOS template files to build projects on. It is based off of the new Javascript framework React Native, and allows for a great deal of functionality and design to go into the UI kit for developers to use.</p>

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
                <p className="tagsProjIndex tagsProjIndexSm">React Native, Javascript, Node, Webpack, Sketch, Illustrator, Photoshop</p>
                <h3 className="projRightHeader projRightHeaderHome tagsProjIndexSm">Tags</h3>
                <p className="tagsProjIndex tagsProjIndexSm">iOS, styling, UI Kit, Phone, Mobile</p>
                <h3 className="projRightHeader projRightHeaderHome">Website</h3>
                <a href="http://github.com/brz0/gold-tooth">
                  <p className="tagsProjIndex">github.com/brz0/gold-tooth</p>
                </a>
              </div>
            </div>
          </Slide>


          <Slide className="projSlideTwo">
            <Element name="projects"></Element>

            <div className="projContainer projContainerTwo">
              <div className="projColLeft">
                <h1>Concept</h1>
                <p>The main idea behind the project is to build an easy to use, interchangeable, and well designed phone UI kit with a distinct style. The kit contains a big selection of screens for a variety of use cases like Dashboards, lists, events etc.</p>
                 <LazyLoad height={0}><Gallery photos={ProjSixPartOne} preloadNextImage={false} /></LazyLoad>
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
                <p>The wireframes for this project consist of multiple iterations for different layouts. They were built off of a list of what was considered to be the most important and useful screens, to be used by developers. The grid, elements, and structure of everything maintains a similar style and some of the elements on the pages are re used throughout the library.</p>
                <LazyLoad height={0}><Gallery photos={ProjSixPartTwo} preloadNextImage={false} /></LazyLoad>
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
                <p>The interface mockup stage of this project involved scrapping a few of the wireframe ideas and adding some other ones, refactoring many as well. The concept developed in the branding made many of the wireframe layouts easy to understand at first glance as well, with the popping gold element on the pages.</p>
                <LazyLoad height={0}><Gallery photos={ProjSixPartThree} preloadNextImage={false} /></LazyLoad>
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
                <p>The brand imagery uses a shiny and modern look to it, although the overall structure and design of the interfaces can be suited to different brand colours, type and imagery also. The gold tooth name and logo take from the idea of having a shiny object stand out. This concept is applied throughout the layouts as well with one main button or focal point in each layout being the most important call to action in the page.</p>
                <LazyLoad height={0}><Gallery photos={ProjSixPartFour} preloadNextImage={false} /></LazyLoad>
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
                <p>The themed Sketch files for this UI kit can be easily edited and adjusted for quick mocking up any new project, with the basic layout and structure included in both branded, and bare wireframe versions. The developed version can be easily cloned from the git repo, and started to see and work with the components to build an app with. The layout and structure is made to work on both large and small screen sizes, and adjusts with fluid behaviour using flexbox.</p>
                <LazyLoad height={0}><Gallery photos={ProjSixPartFive} preloadNextImage={false} /></LazyLoad>
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
                <p>The main platform used for this project is React Native, which allows React style javascript to be used to achieve native functionality on the phone for the user. It also allows easy swapping and management of components/state by using all the benefits of React JS. The project has extensive styling for the pages developed so far, and is easy to adjust and manage within the component files. Using this setup on a nodeJS platform also allows easy use of package dependencies for any additional functionality thats needed.</p>

                <ReactTooltip />

                <img src={ReactNative} className="techIcon" data-tip="React Native" data-effect="solid"/>
                <img src={Javascript} className="techIcon" data-tip="Javascript" data-effect="solid"/>
                <img src={NodeJs} className="techIcon" data-tip="NodeJS" data-effect="solid"/>
                <img src={Webpack} className="techIcon" data-tip="Webpack" data-effect="solid"/>
                <img src={Sketch} className="techIcon" data-tip="Sketch" data-effect="solid"/>
                <img src={Illustrator} className="techIcon" data-tip="Illustrator" data-effect="solid"/>
                <img src={Photoshop} className="techIcon" data-tip="Photoshop" data-effect="solid"/>

                <br />
                <h3>projects</h3>
                <Link to="walltagged" className="errorLink"><button className="hvr-pulse projIndexBtn">&lt;&lt; PREV</button></Link>
                {/* <Link to="gold-tooth" className="errorLink"><button className="hvr-pulse projIndexBtn">NEXT &gt;&gt;</button></Link> */}
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
