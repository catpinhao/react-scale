import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    //alert('New email submitted: ' + this.state.value);
    event.preventDefault();
    this.setState({value: ''});
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Apply &rarr;" />
        </form>
      </div>
    )
  }
}

export default Form;