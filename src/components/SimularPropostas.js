import React, { useState } from 'react';

const SimularPropostas = ({ adicionarProposta }) => {
  const [fornecedor, setFornecedor] = useState('');
  const [proposta, setProposta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarProposta({ fornecedor, proposta });
    setFornecedor('');
    setProposta('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Fornecedor:</label>
      <input value={fornecedor} onChange={(e) => setFornecedor(e.target.value)} required />

      <label>Proposta:</label>
      <input value={proposta} onChange={(e) => setProposta(e.target.value)} required />

      <button type="submit">Adicionar Proposta</button>
    </form>
  );
};

export default SimularPropostas;
