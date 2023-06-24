import React, { Component } from "react";

export default class InputSong extends Component {
    constructor(){
        super()
        this.state={
            song :""
        }
    }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddSong(this.state.song)
    this.setState({song:""})
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={(e)=>this.setState({song:e.target.value})} value={this.state.song} type="text" placeholder="Nhập bài hát cần thêm vào danh sách" />
        <button type="submit">Add</button>
      </form>
    );
  }
}
