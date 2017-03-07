import React from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router';
import LogoLight from '../img/logo-light.svg';
import LogoDark from '../img/logo-dark.svg';
import MenuBtn from '../img/menu-btn.svg';
import MenuBtnDark from '../img/menu-btn-dark.svg';
import MenuClose from '../img/menuClose.svg';

const customStyles = {
  content: {
    top: 'auto',
    left: 'auto',
    right: '0px',
    bottom: 'auto',
    transform: 'none',
    width: '300px',
    height: '100%',
    position: 'fixed',
    marginRight: '0px',
    backgroundColor: '#F21F40',
    border: 'none',
    borderRadius: '0px',
    zIndex: 4,
    padding: '0px',
  },
  overlay: {
    backgroundColor: 'transparent',
    zIndex: 4,
  }
};

function setStyle( objId, propertyObject ) {
 var elem = document.getElementById(objId);
 for (var property in propertyObject)
  elem.style[property] = propertyObject[property];
}

var scrollObject = {};
function getScrollPosition(){
  scrollObject = {
     x: window.pageXOffset,
     y: window.pageYOffset
  }
  if(scrollObject.y > window.innerHeight - 50) {
    setStyle('nav', {'background': '#F8F5F9', 'transition': '1s'});
    setStyle('logoLight', {'display': 'none', 'transition': '1s'});
    setStyle('logoDark', {'display': 'inline-block', 'transition': '1s'});
    setStyle('menuLight', {'display': 'none', 'transition': '1s'});
    setStyle('menuDark', {'display': 'block', 'transition': '1s'});
    document.activeElement.blur();
  } else {
    setStyle('nav', {'background': 'transparent', 'transition': '1s'});
    setStyle('logoLight', {'display': 'inline-block', 'transition': '1s'});
    setStyle('logoDark', {'display': 'none', 'transition': '1s'});
    setStyle('menuLight', {'display': 'block', 'transition': '1s'});
    setStyle('menuDark', {'display': 'none', 'transition': '1s'});
  }
}
window.onscroll = getScrollPosition;

export default class Nav extends React.Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  afterOpenModal() {}
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div>
        <div className="navWrap" id="nav">
          <Link to="/"><img src={LogoLight} className="logoNav" id="logoLight" alt="Justin Brazeau" /></Link>
          <Link to="/"><img src={LogoDark} className="logoNav" id="logoDark" alt="Justin Brazeau" /></Link>
          <img src={MenuBtn} className="menuBtn" id="menuLight" alt="Menu" onClick={this.openModal} />
          <img src={MenuBtnDark} className="menuBtn" id="menuDark" alt="Menu" onClick={this.openModal} />
        </div>

          <Modal
            isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal} style={customStyles}
            contentLabel="Example Modal" >

          <button onClick={this.closeModal} className="modalBtnClose">
            <img src={MenuClose} className="modalBtnCloseImg" />
          </button>
          <div className="menuList">
          <h2>Projects</h2>
            <ul>
              <Link to="chart-suite"><li><span>Chart Suite</span></li></Link>
              <Link to="terminal-ui"><li><span>Terminal UI</span></li></Link>
              <Link to="homes-from-the-future"><li><span>Future Homes</span></li></Link>
              <Link to="odd-scenes"><li><span>Odd Scenes</span></li></Link>
              <Link to="walltagged"><li><span>WallTagged</span></li></Link>
              <Link to="gold-tooth"><li><span>Gold Tooth</span></li></Link>
            </ul>
          </div>
          <div className="bottonMenuWrap">
            <div className="buttonMenu">
              <a href="http://be.net/justinbrazeau">
                <div className="buttonMenuInner btnMenuLeft">
                  <i className="fa fa-behance" aria-hidden="true"></i>
                  <span>behance</span>
                </div>
              </a>
            </div>
            <div className="buttonMenu">
              <a href="http://codepen.io/brz0">
                <div className="buttonMenuInner btnMenuRight">
                  <i className="fa fa-codepen" aria-hidden="true"></i>
                  <span>codepen</span>
                </div>
              </a>
            </div>
            <div className="buttonMenu">
              <a href="http://twitter.com/justinbrazeau">
                <div className="buttonMenuInner btnMenuLeft buttonMenuInnerBottom">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <span>twitter</span>
                </div>
              </a>
            </div>
            <div className="buttonMenu">
              <a href="http://github.com/brz0">
                <div className="buttonMenuInner btnMenuRight buttonMenuInnerBottom">
                  <i className="fa fa-github" aria-hidden="true"></i>
                  <span>github</span>
                </div>
              </a>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
