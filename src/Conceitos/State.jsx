import React, { Component } from 'react'

class State extends Component {

    constructor() {
        super();

        this.state = {
            texto: 'Ramon'
        }
    }

    render() {
        return (
            <div onClick={() => this.setState({ texto: 'Moura' })}>
                {this.state.texto}
            </div>
        )
    }
}

export default State;