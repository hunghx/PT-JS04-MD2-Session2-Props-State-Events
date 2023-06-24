import React, { Component } from 'react'

export default class ListSongs extends Component {
  render() {
    // let list = ["đi học", "đi chơi","đi ngủ"];
    return (
      <div>
        <h1>Danh sách bài hát</h1>
        <ul>
            {this.props.songs.map((element,index)=><li key={index}>
                {element}
            </li>)}
        </ul>
      </div>
    )
  }
}
