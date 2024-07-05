import React, { useState } from 'react';

const CriarRFP = ({ adicionarRFP }) => {
  const [descricao, setDescricao] = useState('');
  const [requisitosTecnicos, setRequisitosTecnicos] = useState('');
  const [prazoEntrega, setPrazoEntrega] = useState('');
  const [criteriosAvaliacao, setCriteriosAvaliacao] = useState('');
  const [instrucoesFornecedores, setInstrucoesFornecedores] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarRFP({ descricao, requisitosTecnicos, prazoEntrega, criteriosAvaliacao, instrucoesFornecedores });
    setDescricao('');
    setRequisitosTecnicos('');
    setPrazoEntrega('');
    setCriteriosAvaliacao('');
    setInstrucoesFornecedores('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Descrição do Item/Serviço:</label>
      <input value={descricao} onChange={(e) => setDescricao(e.target.value)} required />

      <label>Requisitos Técnicos:</label>
      <input value={requisitosTecnicos} onChange={(e) => setRequisitosTecnicos(e.target.value)} required />

      <label>Prazo de Entrega:</label>
      <input value={prazoEntrega} onChange={(e) => setPrazoEntrega(e.target.value)} required />

      <label>Critérios de Avaliação:</label>
      <input value={criteriosAvaliacao} onChange={(e) => setCriteriosAvaliacao(e.target.value)} required />

      <label>Instruções para Fornecedores:</label>
      <input value={instrucoesFornecedores} onChange={(e) => setInstrucoesFornecedores(e.target.value)} required />

      <button type="submit">Criar RFP</button>
    </form>
  );
};

export default CriarRFP;
