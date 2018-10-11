import React from 'react';
import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <p>scale.
          <a className="normal_link" href="#">company</a>
          <a className="boxed_link" href="#">apply &rarr;</a>
        </p>
      </div>
    );
  }
}
export default Header;