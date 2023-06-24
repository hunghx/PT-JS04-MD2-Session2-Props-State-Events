import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Parent from './components/Parent'
// import { ListStudent } from './components/ListStudent'
import Parent from './components/Parent'
import Children from './components/Children'
import Timer from './components/Timer'
import Buttons from './components/Buttons'
import InputSong from './components/InputSong'
import ListSongs from './components/ListSongs'
// let id;

export default class App extends Component {
  constructor(){
    super()
    this.state= {
      time: 200,
      id: 0,
      listMusic:["Xe Đạp","Mùa Đông"]
    }
  }

  // handleStart = ()=>{
  //    let id = setInterval(this.handleDeCrease,1000)
  //    this.setState({id:id})
  // }
  // handleDeCrease=()=>{
  //   this.setState({
  //     time: this.state.time -1
  //   })
  // }
  // handleReset=()=>{
  //   // dừng intervel lại
  //   clearInterval(this.state.id)
  //   this.setState({
  //     time:200
  //   })
  // }
  // handlePause=()=>{
  //   clearInterval(this.state.id)
  // }
  handleAddSong=(song)=>{
    let list = this.state.listMusic
    list.push(song)
this.setState({
  listMusic: list
})
  }
  render(){
    
    // console.log(this.state.time);
  return (
    <>
      <div> 
        {/* property */}
        {/* Đếm ngược */}
        Danh sách bài hát
      </div>
      {/* <Parent/> */}
      {/* <Children/> */}
      {/* <Timer time= {this.state.time}/>
      <Buttons handleStart={this.handleStart} handlePause={this.handlePause} handleReset={this.handleReset}/> */}
      <InputSong handleAddSong={this.handleAddSong}/>
      <ListSongs songs={this.state.listMusic}/>
    </>
  )
  }
}


