import React, { Component } from 'react'

class Props extends Component {

    render() {
        return <h1>Olá {this.props.name + ' ' + this.props.lastName}!</h1>
    }
}

Props.defaultProps = {
    name: 'Desconhecido',
    lastName: 'Sem Sobrenome'
}

export default Props;