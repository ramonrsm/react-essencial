import React from 'react'

export const Button = ({ children, handleClick }) => (
    <button className="main-button" onClick={handleClick}>{children}</button>
);

export default { Button };

// eslint-disable-next-line no-lone-blocks
{/* Exemplo
    <Button>
      <span>Texto </span>
      outro texto.
    </Button>
*/}