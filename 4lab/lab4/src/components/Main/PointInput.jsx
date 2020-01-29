import React, { Component } from 'react'
import './../../css/PointInput.css'
import { logout } from '../../api/user-api'
import { checkPoint } from '../../api/point-api'

export class PointInput extends Component {
  constructor(props){
    super(props);
    this.state = {};

    let xValues = [];
    let rValues = [];
    for (let i = -4; i < 5; i++) {
      xValues.push(false);
      rValues.push(false);
    }
    this.state.xValues = xValues;
    this.state.rValues = rValues;
    this.state.rError = "";

    this.onRSelect = this.onRSelect.bind(this);
    this.onXSelect = this.onXSelect.bind(this);
    this.onChangeY = this.onChangeY.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }  

  onXSelect = (e) => {
    let newXValues = this.state.xValues.slice();
    let index = parseInt(e.target.value);
    for (let index = 0; index < newXValues.length; index++) {
      newXValues[index] = false;   
    }
    newXValues[index + 4] = true;
    this.setState({xValues : newXValues, xValue:index});
  };

  onRSelect(e) {
    let newRValues = this.state.rValues.slice();
    let index = parseInt(e.target.value);
    for (let index = 0; index < newRValues.length; index++) {
      newRValues[index] = false;
    }
    let errorMsg;
    let correctIndex = this.state.rValue;
    if (index <= 0){
      errorMsg = "Radius should be greater than 0"
    } else {
      errorMsg = "";
      newRValues[index + 4] = true;
      correctIndex = index;
    }
    this.props.changeR(correctIndex);
    this.setState({rValues : newRValues, rValue:correctIndex, rError: errorMsg});

  };

  onChangeY(e) {
    let newY = parseFloat(e.target.value);
    if (!isNaN(newY)){
      this.setState({yValue: newY });
    } else {
      this.setState({yValue: undefined });
    }
  }

  onLogout(){
    logout(this.props.history);
  }

  onCheck(){
    if (this.state.xValue === undefined
        || this.state.yValue === undefined
        || this.state.rValue === undefined){
      this.state.checkMsg = "You need to specify all parameters";
      return;
    }
    checkPoint(this.state.xValue,this.state.yValue,this.state.rValue);
  }
  render() {
    return (

      <div className="main-elem">
        <div className="point-input">
          <div className="check-point-button-div">
            <button
              className="check-point-button"
              onClick={this.onLogout}
            >Logout </button>
          </div>
          
          <div className="value-block">
            <h3>X: {this.state.xValue }</h3>
            <div className="checkboxes">
              {this.state.xValues.map((value, index) => (
                <div className="checkbox-item">
                  <p>{index-4}</p>
                  <input 
                    type="checkbox" 
                    checked={value} 
                    onClick={this.onXSelect} 
                    value={index - 4}>
                  </input>
                </div>
              ))}
            </div>
          </div>
          <div className="value-block">
            <h3>Y: {this.state.yValue }</h3>
            <div className="input-text">
                <input 
                  type="text"
                  placeholder="(-3;3)"
                  onChange={this.onChangeY}
                />
            </div>
          </div>
          <div className="value-block">
            <h3>R: {this.state.rValue}</h3>
            <label style={{color: "red"}}>{this.state.rError}</label>
            <div className="checkboxes">
              {this.state.rValues.map((value, index) => (
                <div className="checkbox-item">
                  <p>{index-4}</p>
                  <input 
                    type="checkbox" 
                    checked={value} 
                    onClick={this.onRSelect} 
                    value={index -4}>
                  </input>
                </div>
              ))}
            </div>
          </div>
          <div className="error">{this.state.checkMsg}</div>
          <div className="check-point-button-div">
            <input 
              className="check-point-button" 
              type="button" 
              value="Check point!"
              onClick={this.onCheck}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PointInput
