import React, { Component } from 'react'

export default class Timer extends Component {
  render() {
    return (
      <div>{this.props.time} s</div>
    )
  }
}
