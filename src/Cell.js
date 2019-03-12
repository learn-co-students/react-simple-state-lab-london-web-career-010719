import React, { Component } from 'react';

export default class Cell extends Component {

    handClick = () => {
        this.setState({
            color: '#333'
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        }
    }

    render() {
        return (
          <div
            onClick={this.handClick}
            className="cell"
            style={{ backgroundColor: this.state.color }}
          />
        );
    }
}