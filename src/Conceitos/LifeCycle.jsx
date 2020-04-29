import React, { Component } from 'react';
import Timer from './Timer';

export default class LifeCycle extends Component {
    constructor() {
        super();

        this.state = {
            showTimer: true,
            time: 0
        }
    }

    render() {
        return (
            <div>
                {this.state.showTimer && <Timer time={this.state.time} />}
                <button onClick={() => this.setState({ showTimer: !this.state.showTimer })}>
                    {this.state.showTimer ? 'Hide' : 'Show'} Timer
                </button>
                <button onClick={() => this.setState({ time: this.state.time + 10 })}>Change props</button>
            </div>
        )
    }
}