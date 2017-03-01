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

import ProjLogo from '../img/logos/logo-projects-06.svg';
import ProjBgHeaderPath from '../img/project-header/projbg5.jpg';
const ProjBgHeader = {backgroundImage: 'url(' + ProjBgHeaderPath + ')'};

// Pagination
import PaginationLogoPrev from '../img/logos/logo-projects-04.svg';
import PaginationImgPrevPath from '../img/home/project-04.jpg';
const PaginationImgPrev = {backgroundImage: 'url(' + PaginationImgPrevPath + ')'};
import PaginationLogoNext from '../img/logos/logo-projects-05.svg';
import PaginationImgNextPath from '../img/home/project-06.jpg';
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
const ProjFivePartOneA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/7972e449087263.58ab220fb23f0.jpg';
const ProjFivePartTwoA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/2f985649087263.58ababab85d84.jpg';
const ProjFivePartTwoB = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/05ad0f49087263.58ab220fb2924.jpg';
const ProjFivePartThreeA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/00d3fb49087263.58ab220fb164a.jpg';
const ProjFivePartFourA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/afe0f949087263.58aba04fba5ec.jpg';
const ProjFivePartFourB = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/69d67649087263.58aba04fb9e1f.png';
import ProjFivePartFiveA from '../img/pieces/walltagged-7b.png';
const ProjFivePartFiveB = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/057eba49087263.58aba61019220.png';

const ProjFivePartTwo = [
  { src: ProjFivePartTwoA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartTwoA, }},
  { src: ProjFivePartTwoB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartTwoB, }},
];
const ProjFivePartThree = [
  { src: ProjFivePartThreeA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartThreeA, }},
];
const ProjFivePartFour = [
  { src: ProjFivePartFourA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartFourA, }},
  { src: ProjFivePartFourB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartFourB, }},
];
const ProjFivePartFive = [
  { src: ProjFivePartFiveA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartFiveA, }},
  { src: ProjFivePartFiveB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjFivePartFiveB, }},
];

export default class ProjectFive extends React.Component {

  constructor(props) {
    super(props)
    document.title = "Walltagged";
    document.body.style.backgroundImage = 'url(' + ProjBgLink + ')';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
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

                  <a href="http://walltagged.us" className="projIntroLinks projIntroLinkOne">
                    <i className="ion-ios-world-outline"></i>&nbsp;&nbsp;website
                  </a>
                  <a href="https://github.com/brz0/walltagged" className="projIntroLinks projIntroLinkTwo">
                    <i className="ion-social-github-outline"></i>&nbsp;&nbsp;github
                  </a>
                  <a href="https://www.behance.net/gallery/49087263/WallTagged" className="projIntroLinks projIntroLinkThree">
                    <i className="ion-social-github-outline"></i>&nbsp;&nbsp;behance
                  </a>
                </div>

                <p className="projTextIntro">An interactive drawing app consisting of drawing tools, and templates to draw over. This app version contains a set of tools able to be used on any device with touch or mouse, exportable as export as a PNG.</p>
                <span className="projTags">canvas, art, tools, drawing, graffiti</span>

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
            <p className="projDesc">The first step of this project was to map out all the main screens and devices sizes. Also this stage first had a focus on the editor functionality and layout options. This stage had a couple iterations as well on the built wireframes after review, and research of good ways to best use the layout. The flow of the wireframes was built in this stage and also re-hashed, before selecting the best candidates for the UI mockups.</p>
            <LazyLoad height={0}><Gallery photos={ProjFivePartTwo} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

            <h2 className="projHeaderTxt">UI</h2>
            <p className="projDesc">From the iterations built in the wireframes, and branding styling, more re arranging and application of brand style was put into the UI mockups. The bold branding style was put into the elements to guide the user to the necessary features of the app. The welcome page is also designed to showcase quickly and guide the user to the drawing app or drawing templates.</p>
            <LazyLoad height={0}><Gallery photos={ProjFivePartFour} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

            <h2 className="projHeaderTxt">Branding</h2>
            <p className="projDesc">The initial ideas for the branding styles are based on graffiti, playful colours and urban feel to it. The sharp edges of the elements, bold typography, and loud colourful images/content everywhere add to this style. The logo development process involved iconography associated with paint, art, urban, graffiti. It ended up as a word mark incorporating paint trails on a rounded “wall” or canvas.</p>
            <LazyLoad height={0}><Gallery photos={ProjFivePartThree} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

            <h2 className="projHeaderTxt">Features</h2>
            <p className="projDesc">Canvas has quick responsive behaviour to click or touch on any device its used on. Template files can be loaded in the background to paint over. Ability to export multiple pngs of canvas in the same session. Canvas editor features a drawer of tools that minimize and get out of the canvas area when minimized.</p>
            <LazyLoad height={0}><Gallery photos={ProjFivePartFive} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

            <h2 className="projHeaderTxt">Tech</h2>
            <p className="projDesc">The app us built with responsive Javascript and CSS components built with a nodeJS server. The components use React JS for the drawing app editor which allow for a high level of interactivity with event detection and state manipulation. The responsive behaviour, layout and theming was built using Sass, with flex box grid for the much of the layout. The UI incorporates some material design components from the React JS library Material UI.</p>

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
            <a href="odd-scenes" className="paginationLinkWrap">
              <div style={PaginationImgPrev} className="projPagination">
                <img src={PaginationLogoPrev} className="projPaginationLogo" />
              </div>
            </a>
            <a href="gold-tooth" className="paginationLinkWrap">
            <div style={PaginationImgNext} className="projPagination">
              <img src={PaginationLogoNext} className="projPaginationLogo" />
            </div>
            </a>

          </div>
        </div>

    )
  }
}
