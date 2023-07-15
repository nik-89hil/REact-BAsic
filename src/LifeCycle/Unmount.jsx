import React, { Component } from 'react'

export default class Unmount extends Component {
    constructor(){
        super()
    }

    componentWillUnmount(){
        console.log("Inside component Unmount - CWUnmount")
    }

  render() {
    return (
      <div>
        <h1>component mount or unmount example --</h1>
      </div>
    )
  }
}
