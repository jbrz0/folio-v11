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
import ProjBgHeaderPath from '../img/project-header/projbg6.jpg';
const ProjBgHeader = {backgroundImage: 'url(' + ProjBgHeaderPath + ')'};

// Pagination
import PaginationLogoPrev from '../img/logos/logo-projects-06.svg';
import PaginationImgPrevPath from '../img/home/project-05.jpg';
const PaginationImgPrev = {backgroundImage: 'url(' + PaginationImgPrevPath + ')'};
import PaginationLogoNext from '../img/logos/logo-projects-01.svg';
import PaginationImgNextPath from '../img/home/project-01.jpg';
const PaginationImgNext = {backgroundImage: 'url(' + PaginationImgNextPath + ')'};

// Tech Icons
import ReactNative from '../img/tech/reactNative.png';
import Javascript from '../img/tech/js.png';
import NodeJs from '../img/tech/nodejs.png';
import Webpack from '../img/tech/webpack.png';
import Sketch from '../img/tech/sketch.png';
import Illustrator from '../img/tech/illustrator.png';
import Photoshop from '../img/tech/photoshop.png';

const ProjSixPartTwoA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/59147f49117053.58abb3dfa3139.jpg';
const ProjSixPartTwoB = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1da4c449117053.58abb3dfa45b1.jpg';
const ProjSixPartThreeA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/27a79849117053.58abb3dfa3967.jpg';
const ProjSixPartFourA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/21f9cb49117053.58abb3dfa2a1b.jpg';
const ProjSixPartFourB = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/af94f349117053.58abbf1b028eb.png';
const ProjSixPartFiveA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/74738249117053.58abbf1b01c24.jpg';
import ProjSixPartFiveB from '../img/pieces/gold-7.jpg';

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
    document.title = "Gold Tooth";
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
                  <h1>Gold Tooth</h1>
                  {/* <a href="https://github.com/brz0/gold-tooth" className="projIntroLinks projIntroLinkOne">
                    <i className="ion-ios-world-outline"></i>&nbsp;&nbsp;website
                  </a> */}
                  <a href="https://github.com/brz0/gold-tooth" className="projIntroLinks projIntroLinkTwo">
                    <i className="ion-social-github-outline"></i>&nbsp;&nbsp;github
                  </a>
                  <a href="https://www.behance.net/gallery/49117053/Gold-Tooth" className="projIntroLinks projIntroLinkThree">
                    <i className="ion-social-github-outline"></i>&nbsp;&nbsp;behance
                  </a>
                </div>

                <p className="projTextIntro">Gold Tooth is a mobile UI kit, consisting of design files and iOS template files to build projects on. It is based off of the new Javascript framework React Native, and allows for a great deal of functionality and design to go into the UI kit for developers to use.</p>
                <span className="projTags">iOS, styling, UI Kit, Phone, Mobile</span>

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
          <p className="projDesc">The wireframes for this project consist of multiple iterations for different layouts. They were built off of a list of what was considered to be the most important and useful screens, to be used by developers. The grid, elements, and structure of everything maintains a similar style and some of the elements on the pages are re used throughout the library.</p>
          <LazyLoad height={300}><Gallery photos={ProjSixPartTwo} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

          <h2 className="projHeaderTxt">UI</h2>
          <p className="projDesc">The interface mockup stage of this project involved scrapping a few of the wireframe ideas and adding some other ones, refactoring many as well. The concept developed in the branding made many of the wireframe layouts easy to understand at first glance as well, with the popping gold element on the pages.</p>
          <LazyLoad height={300}><Gallery photos={ProjSixPartThree} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

          <h2 className="projHeaderTxt">Branding</h2>
          <p className="projDesc">The brand imagery uses a shiny and modern look to it, although the overall structure and design of the interfaces can be suited to different brand colours, type and imagery also. The gold tooth name and logo take from the idea of having a shiny object stand out. This concept is applied throughout the layouts as well with one main button or focal point in each layout being the most important call to action in the page.</p>
          <LazyLoad height={300}><Gallery photos={ProjSixPartFour} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

          <h2 className="projHeaderTxt">Features</h2>
          <p className="projDesc">The themed Sketch files for this UI kit can be easily edited and adjusted for quick mocking up any new project, with the basic layout and structure included in both branded, and bare wireframe versions. The developed version can be easily cloned from the git repo, and started to see and work with the components to build an app with. The layout and structure is made to work on both large and small screen sizes, and adjusts with fluid behaviour using flexbox.</p>
          <LazyLoad height={300}><Gallery photos={ProjSixPartFive} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

          <h2 className="projHeaderTxt">Tech</h2>
          <p className="projDesc">The main platform used for this project is React Native, which allows React style javascript to be used to achieve native functionality on the phone for the user. It also allows easy swapping and management of components/state by using all the benefits of React JS. The project has extensive styling for the pages developed so far, and is easy to adjust and manage within the component files. Using this setup on a nodeJS platform also allows easy use of package dependencies for any additional functionality thats needed.</p>

          <ReactTooltip />

          <img src={ReactNative} className="techIcon" data-tip="React Native" data-effect="solid"/>
          <img src={Javascript} className="techIcon" data-tip="Javascript" data-effect="solid"/>
          <img src={NodeJs} className="techIcon" data-tip="NodeJS" data-effect="solid"/>
          <img src={Webpack} className="techIcon" data-tip="Webpack" data-effect="solid"/>
          <img src={Sketch} className="techIcon" data-tip="Sketch" data-effect="solid"/>
          <img src={Illustrator} className="techIcon" data-tip="Illustrator" data-effect="solid"/>
          <img src={Photoshop} className="techIcon" data-tip="Photoshop" data-effect="solid"/><br />

          <h2 className="projHeaderTxt projHeaderTxtLast">More Projects</h2><br />
          <a href="walltagged" className="paginationLinkWrap">
            <div style={PaginationImgPrev} className="projPagination">
              <img src={PaginationLogoPrev} className="projPaginationLogo" />
            </div>
          </a>
          <a href="chart-suite" className="paginationLinkWrap">
          <div style={PaginationImgNext} className="projPagination">
            <img src={PaginationLogoNext} className="projPaginationLogo terminalPagination" />
          </div>
          </a>
        </div>
      </div>
    )
  }
}
