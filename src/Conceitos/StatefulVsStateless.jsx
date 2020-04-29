import React, { Component } from 'react';

import { Square } from './Key'; // Stateless
import { Button } from './Children'; // Stateless

/**
 * Um componente Stateful manipula estado, iniciado no construtor com o 'this.state'.
 * Um componente Stateless não possui manipulação de estado.
 */
export default class Stateful extends Component {

    constructor() {
        super();

        this.state = {
            color: 'green'
        }
    }

    render() {
        return (
            <div>
                <Square color={this.state.color} />
                <Button handleClick={() => this.setState({ color: 'blue' })}>Blue</Button>
                <Button handleClick={() => this.setState({ color: 'yellow' })}>Yellow</Button>
                <Button handleClick={() => this.setState({ color: 'red' })}>Red</Button>
            </div>
        )
    }
}