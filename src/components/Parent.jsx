import  { Component } from 'react'
import Children from './Children'

export default class Parent extends Component {
    // chạy lại
    constructor() {
        super()
        this.state={
            name:"hùng",
            age : 23,
            count: 0
        }
        // this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle=()=>{
        this.setState({
            name:"Hồ Xuân Hùng"
        })
    }
    handleClick=()=>{
        this.setState({
            count: this.state.count+1
        })
    }
    handleSubmitForm=(e)=>{
        e.preventDefault()

    }

    handleReceiveChildrenData = (data)=>{
        // làm việc với data nhận được
        console.log(data);
    }

    // một số event thường gặp
    /*
    onClick
    onSubmit
    onChange (input,select,textArea,..)
    onMouseOver
    */
  render() {
    console.log("chạy qua đây");
    // thay đổi state
    // this.setState({
    //     name: "Nam",
    //     age:34
    // })
    return (
        // jsx
      <div>
        <h2>count : {this.state.count}</h2>
        <h1 name="hùng" onClick={this.handleToggle}>{this.state.name}</h1>
        <Children handleReceiveChildrenData={this.handleReceiveChildrenData} name={this.state.name} age={this.state.age} sex={true}>đây là phần nội dung của component con</Children>
        <button onClick={this.handleClick}>Click me</button>
        <form onSubmit={this.handleSubmitForm}>
            <input type="text" />
            <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}
