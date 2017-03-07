import React from 'react';
import ReactTooltip from 'react-tooltip';
import Gallery from 'react-photo-gallery';
import LazyLoad from 'react-lazyload';
var Scroll  = require('react-scroll');
var Link = Scroll.Link;
var Element    = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

import Nav from '../Nav/Nav.js';
import ProjBgLink from '../img/bg.png';
import ProjLogo from '../img/logos/logo-projects-02.svg';
import ProjBgHeaderPath from '../img/project-header/projbg2.jpg';
const ProjBgHeader = {backgroundImage: 'url(' + ProjBgHeaderPath + ')'};

// Pagination
import PaginationLogoPrev from '../img/logos/logo-projects-01.svg';
import PaginationImgPrevPath from '../img/home/project-01.jpg';
const PaginationImgPrev = {backgroundImage: 'url(' + PaginationImgPrevPath + ')'};
import PaginationLogoNext from '../img/logos/logo-projects-03.svg';
import PaginationImgNextPath from '../img/home/project-03.jpg';
const PaginationImgNext = {backgroundImage: 'url(' + PaginationImgNextPath + ')'};

// Tech Icons
import Sass from '../img/tech/sass.png';
import ReactJs from '../img/tech/react.png';
import Javascript from '../img/tech/js.png';
import NodeJs from '../img/tech/nodejs.png';
import PostCss from '../img/tech/postcss.png';
import Webpack from '../img/tech/webpack.png';
import Sketch from '../img/tech/sketch.png';
import Illustrator from '../img/tech/illustrator.png';
const ProjTwoPartTwoA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/ccddaa49066719.58aa70dc15c6c.jpg';
const ProjTwoPartTwoB = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4d615a49066719.58aa70dc14cb0.jpg';
const ProjTwoPartThreeA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/57460b49066719.58aa70dc161e5.jpg';
const ProjTwoPartThreeB = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/09ca0b49066719.58aa7a328bac4.png';
const ProjTwoPartFourA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/47469649066719.58aa70dc158cd.jpg';
const ProjTwoPartFiveA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e4eed549066719.58aa7a328b2a1.png';
const ProjTwoPartFiveB = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/2468b549066719.58aa7c587985b.png';

const ProjTwoPartTwo = [
  { src: ProjTwoPartTwoA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartTwoA, }},
  { src: ProjTwoPartTwoB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartTwoB, }},
];
const ProjTwoPartThree = [
  { src: ProjTwoPartThreeA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartThreeA, }},
  { src: ProjTwoPartThreeB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartThreeB, }},
];
const ProjTwoPartFour = [
  { src: ProjTwoPartFourA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartFourA, }},
];
const ProjTwoPartFive = [
  { src: ProjTwoPartFiveA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartFiveA, }},
  { src: ProjTwoPartFiveB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjTwoPartFiveB, }},
];

export default class ProjectTwo extends React.Component {

  constructor(props) {
    super(props)
    document.title = "Terminal UI";
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';

    if (window.matchMedia('(max-width: 767px)').matches) {
    document.body.style.backgroundImage = 'none';
    } else {
    document.body.style.backgroundImage = 'url(' + ProjBgLink + ')';
    }
  }
  componentDidMount() {
    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  componentWillMount() { scroll.scrollToTop(); }
  scrollToTop() { scroll.scrollToTop(); }
  scrollToBottom() { scroll.scrollToBottom(); }
  scrollTo() { scroll.scrollTo(100); }
  scrollMore() { scroll.scrollMore(100); }

  render() {

    return (
      <div>
        <Nav />
        <div className="projectIntro">
          <div style={ProjBgHeader} className="projectIntroBanner">
            <div className="projTextWrap projTextWrapTop">
              <div className="projIntroTop">
                <div className="projIntroLinksWrap">
                  <img src={ProjLogo} className="projectLogo"/>
                  <a href="http://terminalui.info" className="projIntroLinks projIntroLinkOne">
                    <i className="ion-ios-world-outline"></i>&nbsp;&nbsp;website
                  </a>
                  <a href="https://github.com/brz0/terminal-ui" className="projIntroLinks projIntroLinkTwo">
                    <i className="ion-social-github-outline"></i>&nbsp;&nbsp;github
                  </a>
                  <a href="https://www.behance.net/gallery/49066719/Terminal-UI" className="projIntroLinks projIntroLinkThree">
                    <i className="ion-social-github-outline"></i>&nbsp;&nbsp;behance
                  </a>
                </div>

                <p className="projTextIntro">Taking inspiration from terminal navigation on computers in the past/present, this UI Kit is a collection of ReactJS components to integrate into a website or app. The components fit nicely in the pre-built grid, with a number of different column options. Contains a range of different cards to be inserted into the grid setup, with interactivity and animations built in.</p>
                <span className="projTags">terminal, scifi, ui kit, library, components</span>

                <Link activeClass="active" to="projects" spy={true}
                  smooth={true} offset={-42} duration={500} onSetActive={this.handleSetActive}>
                  <button className="homeBtn hvr-pulse projViewBtn">
                    <i className="ion-ios-bolt-outline"></i>&nbsp;&nbsp;VIEW PROJECT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="projTextWrap projTextWrapBody">
          <Element name="projects"></Element>

          <h2 className="projHeaderTxt">Wireframes</h2>
          <p className="projDesc">The wireframe development process for this project involved a lot of experimenting with sizing/layout options for different cards to be inserted into the grid layout. The first step was building a versatile grid system, then building all the necessary components that would be useful for a version release of the UI kit. Then options were developed for input navigation and re-iterations of all items.</p>
          <LazyLoad height={300}><Gallery photos={ProjTwoPartTwo} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

          <h2 className="projHeaderTxt">UI</h2>
          <p className="projDesc">The re factored UI mockups are re adjusted and in this stage added a few more responsive behaviours of the cards themselves. The integration of the branding style into the elements helped to adjust the main layout and card contents. This stage also helped to use the previously built elements to focus on a few key layouts and flow of the project.</p>
          <LazyLoad height={300}><Gallery photos={ProjTwoPartFour} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

          <h2 className="projHeaderTxt">Branding</h2>
          <p className="projDesc">Overall style of the kit library is built on a terminal, slightly sci-fi theme, with old fashioned terminal use elements mixed with modern web development layout and style techniques. The colours incorporate a colour mix while still maintaining this look, as well as thin, futuristic looking typography. The logo (as well as colours and other elements) are meant to be swapped, but aim to provide a good base with this library. The final logo option for this project uses a T icon with a retro/futuristic style using a bold T and word mark of the word ‘Terminal’.</p>
          <LazyLoad height={300}><Gallery photos={ProjTwoPartThree} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

          <h2 className="projHeaderTxt">Features</h2>
          <p className="projDesc">The library makes use of two different window behaviours, slideshow featuring specific cards - or scrolling with many cards. The ability to easily add terminal commands attached to pages built in, including multiple queries for the same page (ex: Home, Welcome, 0 can all load /home layout). responsive customized grid, for easily fitting in card designs.</p>
          <LazyLoad height={300}><Gallery photos={ProjTwoPartFive} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

          <h2 className="projHeaderTxt">Tech</h2>
          <p className="projDesc">The main card components are built as ReactJS and Sass components completely pre built. The Sass files contain variables to adjust the theme files to new branding elements. Developer version currently exists with these files, and also a design files version built with Adobe Illustrator and Sketch. The cards use a PostCSS plugin called Lost for extensive flex box grids to be used, combined with pre designed structures that were developed into Javascript and CSS files after.</p>

          <ReactTooltip />

          <img src={Sass} className="techIcon" data-tip="Sass" data-effect="solid"/>
          <img src={ReactJs} className="techIcon" data-tip="React" data-effect="solid"/>
          <img src={Javascript} className="techIcon" data-tip="Javascript" data-effect="solid"/>
          <img src={NodeJs} className="techIcon" data-tip="Node" data-effect="solid"/>
          <img src={PostCss} className="techIcon" data-tip="PostCSS" data-effect="solid"/>
          <img src={Webpack} className="techIcon" data-tip="Webpack" data-effect="solid"/>
          <img src={Sketch} className="techIcon" data-tip="Sketch" data-effect="solid"/>
          <img src={Illustrator} className="techIcon" data-tip="Illustrator" data-effect="solid"/><br />

          <h2 className="projHeaderTxt projHeaderTxtLast">More Projects</h2><br />
          <a href="chart-suite" className="paginationLinkWrap">
            <div style={PaginationImgPrev} className="projPagination">
              <img src={PaginationLogoPrev} className="projPaginationLogo" />
            </div>
          </a>
          <a href="homes-from-the-future" className="paginationLinkWrap">
          <div style={PaginationImgNext} className="projPagination">
            <img src={PaginationLogoNext} className="projPaginationLogo" />
          </div>
          </a>
        </div>
      </div>
    )
  }
}
