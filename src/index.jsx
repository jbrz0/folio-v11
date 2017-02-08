import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Home from './home.jsx';

render( <AppContainer><Home/></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./home.jsx', () => {
    const App = require('./home.jsx').default;
    render(
      <AppContainer>
        <Home/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
