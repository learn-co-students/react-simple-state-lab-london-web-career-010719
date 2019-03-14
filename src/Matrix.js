import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

function grid() {
  let a = []
  let b = []
  let x = ''
  let y = ''

  for (y = 0; y < 10; y++) {
    for (x = 0; x < 10; x++) {
      a.push("#F00")
    }
    b.push(a)
    a = []
  }
  return b
}

Matrix.defaultProps = {
  values: grid()
}
