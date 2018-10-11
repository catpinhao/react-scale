import React from 'react';
import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="text">
          <p>scale.</p>
          <p className="copyright">&copy; 2017 Scale. All rights reserved.</p>
        </div>
        <div className="links_container">
        <div className="normal_links">
          <a href='#'>links pa cenas</a>
          <a href='#'>links pa cenas</a>
          <a href='#'>links pa cenas</a>
        </div>
        <div className="boxed_links">
          <a href='#'>redes sociais</a>
          <a href='#'>redes sociais</a>
          <a href='#'>redes sociais</a>
        </div>
      </div>
    </div>
    );
  }
}
export default Footer;
