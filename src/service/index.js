import React from 'react';
import './service.scss';

class Service extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      services: this.props.data.services
    });
  }

  renderTable = () => {
    return this.state.services.map(value => {
      return (
          <tr>
            <td>{value.image}</td>
            <td>{value.text}</td>
          </tr>
      )
    })
  }
  
  render() {
    return (
      <div className="service">
        <table>
          { this.renderTable() }
        </table>
      </div>
    );
  }
}
export default Service;