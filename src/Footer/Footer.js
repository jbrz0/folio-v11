import React from 'react';

import FooterPath from '../img/footer.jpg';
const FooterBg = {backgroundImage: 'url(' + FooterPath + ')'}

export default class Footer extends React.Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className="footerWrap" style={FooterBg}>
        <div className="footerInner">
          <p><span>v11</span> | {this.getYear()}</p>
          <span>Contact:</span> <a href="mailto:justinbrazeau@gmail.com">justinbrazeau@gmail.com</a>
        </div>
      </div>
    )
  }
}
