import React, { useState } from 'react';

const ControleFornecedor = ({ adicionarControle }) => {
  const [fornecedor, setFornecedor] = useState('');
  const [performance, setPerformance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarControle({ fornecedor, performance });
    setFornecedor('');
    setPerformance('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Fornecedor:</label>
      <input value={fornecedor} onChange={(e) => setFornecedor(e.target.value)} required />

      <label>Performance:</label>
      <input value={performance} onChange={(e) => setPerformance(e.target.value)} required />

      <button type="submit">Adicionar Controle</button>
    </form>
  );
};

export default ControleFornecedor;
