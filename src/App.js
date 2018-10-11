import React from 'react';
import './App.css';

import Header from './header/index.js';
import Main from './main/index.js';
import ServiceWrapper from './service-wrapper/index.js';
import Apply from './apply/index.js';
import Footer from './footer/index.js';

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <header className="header-display">
          <Header />
        </header>
        <div className="main-display">
          <Main />
        </div>
        <div className="services-display">
          <ServiceWrapper />
        </div>
        <div className="apply-display">
          <Apply />
        </div>
        <footer className="footer-display">
          <Footer />
        </footer>
      </div>
    )
  }
}

export default App;
