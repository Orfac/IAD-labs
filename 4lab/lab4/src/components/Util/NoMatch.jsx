import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class NoMatch extends Component {
  render() {
    return (
      <div>
        <b>Вы пытаетесь перейти на страницу, которой не существует!</b>
        <Link to="/">На страницу входа</Link>
      </div>
    )
  }
}

export default NoMatch
