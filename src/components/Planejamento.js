import React, { useState } from 'react';

const Planejamento = ({ adicionarAquisicao }) => {
  const [item, setItem] = useState('');
  const [justificativa, setJustificativa] = useState('');
  const [tipoContrato, setTipoContrato] = useState('');
  const [criteriosSelecao, setCriteriosSelecao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarAquisicao({ item, justificativa, tipoContrato, criteriosSelecao });
    setItem('');
    setJustificativa('');
    setTipoContrato('');
    setCriteriosSelecao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Item a ser adquirido:</label>
      <input value={item} onChange={(e) => setItem(e.target.value)} required />

      <label>Justificativa:</label>
      <input value={justificativa} onChange={(e) => setJustificativa(e.target.value)} required />

      <label>Tipo de Contrato:</label>
      <input value={tipoContrato} onChange={(e) => setTipoContrato(e.target.value)} required />

      <label>Critérios de Seleção:</label>
      <input value={criteriosSelecao} onChange={(e) => setCriteriosSelecao(e.target.value)} required />

      <button type="submit">Adicionar Aquisição</button>
    </form>
  );
};

export default Planejamento;
