import React from 'react'

export default props => (
    <div style={{ height: "200px", width: "200px", backgroundColor: "green" }}
        onClick={event => alert('Clicou!')} /> 
    
    // Os Eventos não são exibidos inline na DOM do navegador, é criado um listener por trás.
);