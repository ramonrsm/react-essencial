import React from 'react';

export const Square = ({ color }) => (
    <div style={{
        height: "200px",
        width: "200px",
        backgroundColor: color
    }} />
);

Square.defaultProps = {
    color: "red"
};

export default { Square };

// eslint-disable-next-line no-lone-blocks
{/* Exemplo: A propriedade Key deve ser única ao criar componentes com arrays.
    ['blue', 'red', 'green'].map((square, index) => <Square key={square+index} color={square} />)
*/}