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
import ProjLogo from '../img/logos/logo-projects-03.svg';
import ProjBgHeaderPath from '../img/project-header/projbg3.jpg';
const ProjBgHeader = {backgroundImage: 'url(' + ProjBgHeaderPath + ')'};

// Pagination
import PaginationLogoPrev from '../img/logos/logo-projects-02.svg';
import PaginationImgPrevPath from '../img/home/project-02.jpg';
const PaginationImgPrev = {backgroundImage: 'url(' + PaginationImgPrevPath + ')'};
import PaginationLogoNext from '../img/logos/logo-projects-04.svg';
import PaginationImgNextPath from '../img/home/project-04.jpg';
const PaginationImgNext = {backgroundImage: 'url(' + PaginationImgNextPath + ')'};

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
const ProjThreePartTwoA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/80f2a849069065.58aac958a9088.jpg';
const ProjThreePartTwoB = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/26b85d49069065.58aab473c1e26.jpg';
const ProjThreePartThreeA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/63205a49069065.58aabb32af44d.jpg';
const ProjThreePartFourA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/821f5549069065.58aabb32b0604.jpg';
const ProjThreePartFourB = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/0d7cde49069065.58aabb32afd59.png';
const ProjThreePartFiveA = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/630c5249069065.58aac5b31fcc3.png';
const ProjThreePartFiveB = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/266e8449069065.58aac5b3283aa.png';

const ProjThreePartTwo = [
  { src: ProjThreePartTwoA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartTwoA, }},
  { src: ProjThreePartTwoB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartTwoB, }},
];
const ProjThreePartThree = [
  { src: ProjThreePartThreeA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartThreeA, }},
];
const ProjThreePartFour = [
  { src: ProjThreePartFourA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartFourA, }},
  { src: ProjThreePartFourB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartFourB, }},
];
const ProjThreePartFive = [
  { src: ProjThreePartFiveA, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartFiveA, }},
  { src: ProjThreePartFiveB, width: 120, height: 120, aspectRatio: 1, lightboxImage: { src: ProjThreePartFiveB, }},
];

export default class ProjectThree extends React.Component {

  constructor(props) {
    super(props)
    document.title = "Homes From The Future";
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
                  <a href="http://homesfromthefuture.com" className="projIntroLinks projIntroLinkOne">
                    <i className="ion-ios-world-outline"></i>&nbsp;&nbsp;website
                  </a>
                  <a href="https://github.com/brz0/hftf-wp" className="projIntroLinks projIntroLinkTwo">
                    <i className="ion-social-github-outline"></i>&nbsp;&nbsp;github
                  </a>
                  <a href="https://www.behance.net/gallery/49069065/Homes-From-The-Future" className="projIntroLinks projIntroLinkThree">
                    <i className="ion-social-github-outline"></i>&nbsp;&nbsp;behance
                  </a>
                </div>

                <p className="projTextIntro">Homes from the Future is an active tech blog dedicated to home automation and the internet of things. With a detailed product review page, and article page housed in a distinctly styled blog.</p>
                <span className="projTags">blog, tech, internet of things, home automation, news</span>

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
          <p className="projDesc">The main goal of the wireframes was to house many different media types and large amounts of text in an informative and clear way. The navigation elements are separated from the post content on layouts to aid with navigation. The iterations varied throughout the wireframing, mockups and even development process for this project, based on the best suited way to display product and article info.</p>
          <LazyLoad height={300}><Gallery photos={ProjThreePartTwo} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

          <h2 className="projHeaderTxt">UI</h2>
          <p className="projDesc">Interface elements use a modern and clean stylistic approach combining the brand style and wireframe layouts. Housing the content in boxes helped to use whitespace to separate elements, and the branding colours/styles helped to further this idea. Mobile layouts re-organize the sidebars to work below the content, and let the content be the main focus. This stage also involved a lot of refactoring to the product template (which later went through further revisions in the development stage).</p>
          <LazyLoad height={300}><Gallery photos={ProjThreePartFour} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

          <h2 className="projHeaderTxt">Branding</h2>
          <p className="projDesc">The branding imagery and style for this project was based on technology and connectedness, as this is displayed prominently in the logo especially. The button and element styling uses playful colours and clean text to also make the topic of “home automation” seem inviting and fun rather than overwhelming. The header typography uses a monospace font to mimic a typewriter style, to add some extra originality to the overall layouts.</p>
          <LazyLoad height={300}><Gallery photos={ProjThreePartThree} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

          <h2 className="projHeaderTxt">Features</h2>
          <p className="projDesc">Post page features bold and enlarged media elements, that behave well between screen sizes. The menu contains a modal with many features for navigation through the website, with all elements being enlarged on most screen sizes to optimize the interactivity. Contains a separated post template to highlight features of the product, and article template which is better suited for longer text articles about guides and concepts.</p>
          <LazyLoad height={300}><Gallery photos={ProjThreePartFive} preloadNextImage={false} /></LazyLoad><div className="clearfix"></div>

          <h2 className="projHeaderTxt">Tech</h2>
          <p className="projDesc">Build on wordpress, with a custom theme built into it from scratch. The theme uses some custom plugins for post management, and some pre built plugins for Mailchimp, analytics, and content management. Images are optimized for speed and styling is written with vanilla CSS, using some features from BEM methodology, and well structured content organization in the theme style files. Theme functionality also has many customized elements using PHP for content, layout, and data organization.</p>

          <ReactTooltip />

          <img src={Wordpress} className="techIcon" data-tip="Wordpress" data-effect="solid"/>
          <img src={Javascript} className="techIcon" data-tip="Javascript" data-effect="solid"/>
          <img src={Php} className="techIcon" data-tip="PHP" data-effect="solid"/>
          <img src={Html} className="techIcon" data-tip="HTML" data-effect="solid"/>
          <img src={Css} className="techIcon" data-tip="CSS" data-effect="solid"/>
          <img src={Litmus} className="techIcon" data-tip="Litmus" data-effect="solid"/>
          <img src={Sketch} className="techIcon" data-tip="Sketch" data-effect="solid"/>
          <img src={Illustrator} className="techIcon" data-tip="Illustrator" data-effect="solid"/>
          <img src={Photoshop} className="techIcon" data-tip="Photoshop" data-effect="solid"/><br />

          <h2 className="projHeaderTxt projHeaderTxtLast">More Projects</h2><br />
          <a href="terminal-ui" className="paginationLinkWrap">
            <div style={PaginationImgPrev} className="projPagination">
              <img src={PaginationLogoPrev} className="projPaginationLogo terminalPagination" />
            </div>
          </a>
          <a href="odd-scenes" className="paginationLinkWrap">
          <div style={PaginationImgNext} className="projPagination">
            <img src={PaginationLogoNext} className="projPaginationLogo" />
          </div>
          </a>
        </div>
      </div>
    )
  }
}
