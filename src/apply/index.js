import React from 'react';
import './apply.scss';

import Form from '../form/index.js';

class Apply extends React.Component {
  render() {
    return (
      <div className="apply">
        <p className="break">|</p>
        <h3>let's get started.</h3>
        <Form />
      </div>
    )
  }
}

export default Apply;