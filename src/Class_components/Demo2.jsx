import React, { Component } from 'react'

export default class Demo2 extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <h1>
            This {this.props.name} name is come from another component name {this.props.compo} by using props ? {this.props.pro}

        </h1>
      </div>
    )
  }
}
