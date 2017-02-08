import React from 'react';
import Social from '../Social/Social.js';
import Footer from '../Footer/Footer.js';

import LogoOne from '../img/logos/logo-projects-01.svg';
import LogoTwo from '../img/logos/logo-projects-02.svg';
import LogoThree from '../img/logos/logo-projects-03.svg';
import LogoFour from '../img/logos/logo-projects-04.svg';
import LogoFive from '../img/logos/logo-projects-06.svg';
import LogoSix from '../img/logos/logo-projects-05.svg';
import ProjectOnePath from '../img/uncompressed/project-01.jpg';
import ProjectTwoPath from '../img/uncompressed/project-02.jpg';
import ProjectThreePath from '../img/uncompressed/project-03.jpg';
import ProjectFourPath from '../img/uncompressed/project-04.jpg';
import ProjectFivePath from '../img/uncompressed/project-05.jpg';
import ProjectSixPath from '../img/uncompressed/project-06.jpg';
const ProjectOne = {backgroundImage: 'url(' + ProjectOnePath + ')'}
const ProjectTwo = {backgroundImage: 'url(' + ProjectTwoPath + ')'}
const ProjectThree = {backgroundImage: 'url(' + ProjectThreePath + ')'}
const ProjectFour = {backgroundImage: 'url(' + ProjectFourPath + ')'}
const ProjectFive = {backgroundImage: 'url(' + ProjectFivePath + ')'}
const ProjectSix = {backgroundImage: 'url(' + ProjectSixPath + ')'}

var Scroll  = require('react-scroll');
//
// var Link       = Scroll.Link;
var Element    = Scroll.Element;
// var Events     = Scroll.Events;
// var scroll     = Scroll.animateScroll;
// var scrollSpy  = Scroll.scrollSpy;

export default class IntroGrid extends React.Component {
  render() {
    return (

        <div className="introGridWrap">
          <Element name="projects"></Element>
          <div className="introGridCell" style={ProjectOne}>
            <img src={LogoOne} className="logoHome" alt="Chart Suite"/>
          </div>
          <div className="introGridCell" style={ProjectTwo}>
            <img src={LogoTwo} className="logoHome" alt="Terminal UI"/>
          </div>
          <div className="introGridCell" style={ProjectThree}>
            <img src={LogoThree} className="logoHome" alt="Homes From The Future"/>
          </div>
          <div className="introGridCell" style={ProjectFour}>
            <img src={LogoFour} className="logoHome" alt="Odd Scenes"/>
          </div>
          <div className="introGridCell" style={ProjectFive}>
            <img src={LogoFive} className="logoHome" alt="Wall Tagged"/>
          </div>
          <div className="introGridCell" style={ProjectSix}>
            <img src={LogoSix} className="logoHome" alt="Gold Tooth"/>
          </div>
          <Social />
          <Footer />
        </div>

    )
  }
}
