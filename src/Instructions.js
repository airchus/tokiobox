import React, { Component } from 'react';
import picture from './alexi.png'

export default class Instructions extends Component {

  render() {
    return(
      <div className= "instructions">
        <p>Alexandra Ziminski</p>
        <img alt="alexi" src={picture} />
      </div>
    )
  }
}
