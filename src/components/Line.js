import React, { Component } from 'react'

export default class Line extends Component {
  render() {
    const style = {
      width: '100%',
      height: '4px',
      background: '#dfdfdf',
    }
    return (
      <div style={style} />
    )
  }
}
