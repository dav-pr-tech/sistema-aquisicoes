import React from 'react';

const GestaoContratos = ({ controles }) => {
  return (
    <div>
      <h2>Gestão de Contratos</h2>
      <ul>
        {controles.map((controle, index) => (
          <li key={index}>
            <strong>Fornecedor:</strong> {controle.fornecedor} <br />
            <strong>Performance:</strong> {controle.performance} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestaoContratos;
