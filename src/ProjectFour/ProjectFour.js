import React from 'react';
import Nav from '../Nav/Nav.js';
import ReactTooltip from 'react-tooltip';
import Gallery from 'react-photo-gallery';
import LazyLoad from 'react-lazyload';
var Scroll  = require('react-scroll');
var Link = Scroll.Link;
var Element    = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;
import ProjBgLink from '../img/bg.png';

import ProjLogo from '../img/logos/logo-projects-04.svg';
import ProjBgHeaderPath from '../img/project-header/projbg4.jpg';
const ProjBgHeader = {backgroundImage: 'url(' + ProjBgHeaderPath + ')'};

// Pagination
import PaginationLogoPrev from '../img/logos/logo-projects-03.svg';
import PaginationImgPrevPath from '../img/home/project-03.jpg';
const PaginationImgPrev = {backgroundImage: 'url(' + PaginationImgPrevPath + ')'};
import PaginationLogoNext from '../img/logos/logo-projects-06.svg';
import PaginationImgNextPath from '../img/home/project-05.jpg';
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
import Photoshop from '../img/tech/photoshop.png';
const ProjFourPartTwoA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d0006e49078421.58aacc59a4c05.jpg';
const ProjFourPartTwoB = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5382b649078421.58aace116eb49.jpg';
const ProjFourPartThreeA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/c6b99849078421.58aaf155daa2f.png';
const ProjFourPartFourA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/0bc07449078421.58aacc59a4369.jpg';
const ProjFourPartFourB = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4ecd1249078421.58aae876b84a7.png';
const ProjFourPartFiveA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/71f6e049078421.58ab1274451f5.png';
const ProjFourPartFiveB = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/399d4d49078421.58aaf155da4a3.png';
const ProjFourPartFiveC = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4a0a7549078421.58ab12744f19a.png';

const ProjFourPartTwo = [
  { src: ProjFourPartTwoA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartTwoA, }},
  { src: ProjFourPartTwoB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartTwoB, }},
];
const ProjFourPartThree = [
  { src: ProjFourPartThreeA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartThreeA, }},
];
const ProjFourPartFour = [
  { src: ProjFourPartFourA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartFourA, }},
  { src: ProjFourPartFourB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartFourB, }},
];
const ProjFourPartFive = [
  { src: ProjFourPartFiveB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartFiveB, }},
  { src: ProjFourPartFiveA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartFiveA, }},
  { src: ProjFourPartFiveC, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFourPartFiveC, }},
];

export default class ProjectFour extends React.Component {

  constructor(props) {
    super(props)
    document.title = "Odd Scenes";
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
  componentWillMount() {
    scroll.scrollToTop();
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
      <div>
        <Nav />

        <div className="projectIntro">
          <div style={ProjBgHeader} className="projectIntroBanner">

            <div className="projTextWrap projTextWrapTop">
              <div className="projIntroTop">

                <div className="projIntroLinksWrap">
                  <img src={ProjLogo} className="projectLogo"/>

                  <a href="http://oddscenes.us" className="projIntroLinks projIntroLinkOne">
                    <i className="ion-ios-world-outline"></i>&nbsp;&nbsp;website
                  </a>
                  <a href="https://github.com/brz0/odd-scenes" className="projIntroLinks projIntroLinkTwo">
                    <i className="ion-social-github-outline"></i>&nbsp;&nbsp;github
                  </a>
                  <a href="https://www.behance.net/gallery/49078421/Odd-Scenes" className="projIntroLinks projIntroLinkThree">
                    <i className="ion-social-github-outline"></i>&nbsp;&nbsp;behance
                  </a>
                </div>

                <p className="projTextIntro">A unique layout media website, as a showcase and commerce hub for a digital illustration brand. The layout arranges elements to break a standard grid format, and showcase all the products & art pieces.</p>
                <span className="projTags">digital art, illustration, shop, clothing, showcase</span>

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
            <p className="projDesc">The first step of these wireframes was mapping out all the main layouts for the sections on the site. Knowing it will be a one page, scrolling website there was a couple iterations of the layout made, as well as some experimental external shop page templates. From there revisions were made and altered versions were made.</p>
            <LazyLoad height={0}><Gallery photos={ProjFourPartTwo} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

            <h2 className="projHeaderTxt">UI</h2>
            <p className="projDesc">At this stage the decision of what artwork to add as the floating elements to the chosen layouts was made, as well as the best flow/layout to go with. The elements used the bright colours to pop out of the layout and give each section a distinct call to action. More of the text and flow was mapped out also in this stage, after incorporating the developed branding style.</p>
            <LazyLoad height={0}><Gallery photos={ProjFourPartFour} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

            <h2 className="projHeaderTxt">Branding</h2>
            <p className="projDesc">The brand itself is built on style incorporating abstracted shapes, bright colours and sometimes using different media/technology to make its pieces. The logo plays on this with a chaotic layout of some basic shapes, the same way the illustration elements are made. The colours and shapes use a bold turquoise and purple combination that were initially being used years ago as its colours, with more accents and shading being added to the palette.</p>
            <LazyLoad height={0}><Gallery photos={ProjFourPartThree} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

            <h2 className="projHeaderTxt">Features</h2>
            <p className="projDesc">High quality images optimized and compressed to load fast and display well. Responsive behaviour of unique style grids flows well into smaller screens. Shop page, modal loads up a menu with information and a bold direct link to product.</p>
            <LazyLoad height={0}><Gallery photos={ProjFourPartFive} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

            <h2 className="projHeaderTxt">Tech</h2>
            <p className="projDesc">A lightweight nodeJS app built with Sass and ReactJS as its main front end tools. Using a fairly basic setup with some PostCSS plugins for extra layout design and automation. Modules build into an optimized, minified single page application with a modified webpack setup. Some extra NPM packages also used as a basis for modals, and other ui elements.</p>

            <ReactTooltip />

            <img src={Sass} className="techIcon" data-tip="Sass" data-effect="solid"/>
            <img src={ReactJs} className="techIcon" data-tip="React" data-effect="solid"/>
            <img src={Javascript} className="techIcon" data-tip="Javascript" data-effect="solid"/>
            <img src={NodeJs} className="techIcon" data-tip="NodeJS" data-effect="solid"/>
            <img src={PostCss} className="techIcon" data-tip="PostCSS" data-effect="solid"/>
            <img src={Webpack} className="techIcon" data-tip="Webpack" data-effect="solid"/>
            <img src={Sketch} className="techIcon" data-tip="Sketch" data-effect="solid"/>
            <img src={Illustrator} className="techIcon" data-tip="Illustrator" data-effect="solid"/>
            <img src={Photoshop} className="techIcon" data-tip="Photoshop" data-effect="solid"/> <br />

            <h2 className="projHeaderTxt projHeaderTxtLast">More Projects</h2><br />
            <a href="homes-from-the-future" className="paginationLinkWrap">
              <div style={PaginationImgPrev} className="projPagination">
                <img src={PaginationLogoPrev} className="projPaginationLogo terminalPagination" />
              </div>
            </a>
            <a href="walltagged" className="paginationLinkWrap">
            <div style={PaginationImgNext} className="projPagination">
              <img src={PaginationLogoNext} className="projPaginationLogo" />
            </div>
            </a>

          </div>
        </div>

    )
  }
}
