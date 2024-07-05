import React from 'react';

const AvaliarPropostas = ({ propostas }) => {
  return (
    <div>
      <h2>Avaliação de Propostas</h2>
      <ul>
        {propostas.map((proposta, index) => (
          <li key={index}>
            <strong>Fornecedor:</strong> {proposta.fornecedor} <br />
            <strong>Proposta:</strong> {proposta.proposta} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvaliarPropostas;
