import React from 'react';
import './service-wrapper.scss';

import Service from '../service/index.js';

class ServiceWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      services: [
        {
          image: 'histograma',
          text: 'Growth Strategy'
        },
        {
          image: 'lupa',
          text: 'Search Engine Optimization'
        },
        {
          image: 'megafone',
          text: 'Content Marketing'
        },
        {
          image: 'notas',
          text: 'Paid Acquisition'
        },
        {
          image: 'sale tag',
          text: 'Brand Visibility'
        }
      ]
    }
  }

  render() {
    return (
      <div className="services">
        <p className="break">|</p>
        <h2>we drive growth.</h2>
        <p>Our services are designed to help digital businesses<br/>
        drive more traffic and conversions.</p>
        <Service data={this.state} />
      </div>
    );
  }
}
export default ServiceWrapper;
