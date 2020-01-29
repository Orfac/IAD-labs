import React, { Component } from 'react'

export class AuthItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  
  onChange(e) {
    this.setState({'value': e.target.value });
    this.props.onAuthValueChanged(e.target.value);
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <input 
          type="text" 
          placeholder={this.props.placeHolder} 
          value={this.state.value} 
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default AuthItem
