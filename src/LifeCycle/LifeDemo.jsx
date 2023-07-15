import React, { Component } from 'react'
import FormDemo2 from '../forms/FormDemo2'
import Unmount from './Unmount';


export default class LifeDemo extends Component {
    constructor(){
        super()
        console.log("Inside constructor - C");
        this.state={
          counter:0,
          enable:true,
        }
    }
    componentDidMount(){
      console.log("Inside component did Mount - CDM")
    }
    componentDidUpdate(){
      console.log("Inside component did Update - CDU")
    }
    
  render() {
    console.log("Inside render - REND")
    return (
      <div>
        <h1>Enable using life components check <b>UPDATING</b></h1><br /><br /><br />

        {this.state.enable?<Unmount/>:null}<br /><br />
        <button onClick={()=>{this.setState({enable:!this.state.enable})}}> Enable / Disable</button>

        <br /><br /><br />
        <h1>Lifecycle Method of components... <b>MOUNTING</b></h1><br /><br /><br />
        <h4>Counter value : {this.state.counter}</h4>
        <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>Count ++</button>
        
        
        
        {console.log("Inside return - RET")}
      </div>
    )
  }
}
