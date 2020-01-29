import React, { Component } from 'react';
import AuthItem from './AuthItem';
import {Link} from 'react-router-dom';
import Api, { register, login_try } from '../../api/user-api'

import './../../css/Auth.css';


export class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.login = "";
    this.state.password = "";
    this.state.info = "";
    this.onLogIn = this.onLogIn.bind(this);
    this.onRegister = this.onRegister.bind(this);
  }
  handleLogin = (newLogin) => {
    this.setState({login: newLogin})
  };
  handlePassword = (newPassword) => {
    this.setState({password: newPassword})
  };

  onLogIn(){
    if(this.state.login !== "" && this.state.password !== "") {
      login_try(this.state.login,this.state.password,this.props.history);
    } 
  }

  onRegister(){
    if(this.state.login !== "" && this.state.password !== "") {
      register(this.state.login,this.state.password,this.props.history);
    } 
  }
  render() {
    return (
      <div className="auth-form">
        <div className="student-info">
        <p className="student-info-item">Выполнил: Молодецкий Арсений </p>
        <p className="student-info-item">Группа: p3217 </p>
        <p className="student-info-item">Вариант: 56488</p>
        </div>
      
        <div className="auth-item">
          <AuthItem 
            name={"Login"}
            placeHolder={"Ivan"} 
            onAuthValueChanged={this.handleLogin}
          />
        </div>
        <div className="auth-item">
          <AuthItem 
            name={"Password"}
            placeHolder={"12345"}
            onAuthValueChanged={this.handlePassword}
          />
        </div>
        <div className="auth-action">
          <div className="buttons">
            
            <button className="auth-button" onClick={this.onLogIn}>
              Login
            </button> 
            
            <button className="auth-button" onClick={this.onRegister}>
              Register
            </button> 
          </div>
          <div className="auth-info">
            {this.state.info}
          </div>
        </div>
      </div>
    )
  }
}

export default Auth
