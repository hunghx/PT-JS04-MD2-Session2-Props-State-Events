import React, { Component } from 'react'

export default class Buttons extends Component {
  // handleStart=()=>{
  //   console.log(this.props);
  //   this.props.setTime();
  // }
  render() {
    return (
      <div>
        <button onClick={this.props.handleStart}>Start</button>
        <button onClick={this.props.handlePause}>Pause</button>
        <button onClick={this.props.handleReset}>Reset</button>
      </div>
    )
  }
}
