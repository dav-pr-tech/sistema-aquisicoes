import React from 'react';

const ListaRFPs = ({ rfps }) => {
  return (
    <div>
      <h2>Lista de RFPs</h2>
      <ul>
        {rfps.map((rfp, index) => (
          <li key={index}>
            <strong>Descrição:</strong> {rfp.descricao} <br />
            <strong>Requisitos Técnicos:</strong> {rfp.requisitosTecnicos} <br />
            <strong>Prazo de Entrega:</strong> {rfp.prazoEntrega} <br />
            <strong>Critérios de Avaliação:</strong> {rfp.criteriosAvaliacao} <br />
            <strong>Instruções para Fornecedores:</strong> {rfp.instrucoesFornecedores} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaRFPs;
