import { Component } from 'react'

export default class Children extends Component {
    constructor(props){
        super(props)
        console.log(props);
    }
    handleSendData= ()=>{
        this.props.handleReceiveChildrenData("data được gửi từ con");
    }
  render() {
    return (
      <div>
        <button onClick={this.handleSendData}>Send Data</button>
      </div>
    )
  }
}
