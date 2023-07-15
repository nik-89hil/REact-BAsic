import React, { Component } from 'react'
import Demo2 from './Demo2';

export default class Demo extends Component {
  constructor(){
    super();
    this.state={
      fruit:"Apple",
      color:'red',
      price:100
    }
    
  }

  render() {
    return (
      <div>
        <h1>- Fruit list with Class Component :</h1>
        <h3>This Fuit name is {this.state.fruit}</h3>
        <p>This {this.state.color} in color.</p> 
        <p>Current rate is : ${this.state.price}</p>
        <button onClick={()=>this.setState({fruit:"Poremeganate",price:40})}>change the fruit</button>
        <br /><br />
        <Demo2 name='Nikhil' compo='Demo' pro='true'/>
      </div>
    )
  }
}
