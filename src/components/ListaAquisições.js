import React from 'react';

const ListaAquisições = ({ aquisicoes }) => {
  return (
    <div>
      <h2>Lista de Aquisições</h2>
      <ul>
        {aquisicoes.map((aquisicao, index) => (
          <li key={index}>
            <strong>Item:</strong> {aquisicao.item} <br />
            <strong>Justificativa:</strong> {aquisicao.justificativa} <br />
            <strong>Tipo de Contrato:</strong> {aquisicao.tipoContrato} <br />
            <strong>Critérios de Seleção:</strong> {aquisicao.criteriosSelecao} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaAquisições;
