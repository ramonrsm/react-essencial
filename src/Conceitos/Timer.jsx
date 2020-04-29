import React, { Component } from 'react';

export default class Timer extends Component {

    constructor() {
        super();
        console.log('constructor');

        this.state = {
            time: 0
        }

        this.timer = null;
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.timer = setInterval(() => { this.setState({ time: this.state.time + 1 }) }, 1000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', 'Props', this.props.time, 'nextProps', nextProps.time);
        console.log('shouldComponentUpdate', 'State', this.state.time, 'nextState', nextState.time);
        return this.state.time !== nextState.time;
        //return this.props.time !== nextProps.time;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', 'prevProps', this.props.time, 'nextProps', prevProps.time);
        console.log('componentDidUpdate', 'prevState', prevState.time, 'State', this.state.time);
    }

    render() {
        console.log('render');
        return <h1>Timer: {this.state.time}</h1>
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timer);
    }
}