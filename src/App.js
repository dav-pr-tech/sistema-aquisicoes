import React, { useState } from 'react';
import './App.css';
import AvaliarPropostas from './components/AvaliarPropostas';
import ControleFornecedor from './components/ControleFornecedor';
import CriarRFP from './components/CriarRFP';
import GestaoContratos from './components/GestaoContratos';
import ListaAquisições from './components/ListaAquisições';
import ListaRFPs from './components/ListaRFPs';
import Planejamento from './components/Planejamento';
import SimularPropostas from './components/SimularPropostas';

const App = () => {
  const [aquisicoes, setAquisicoes] = useState([]);
  const [rfps, setRFPs] = useState([]);
  const [propostas, setPropostas] = useState([]);
  const [controles, setControles] = useState([]);

  const adicionarAquisicao = (aquisicao) => {
    setAquisicoes([...aquisicoes, aquisicao]);
  };

  const adicionarRFP = (rfp) => {
    setRFPs([...rfps, rfp]);
  };

  const adicionarProposta = (proposta) => {
    setPropostas([...propostas, proposta]);
  };

  const adicionarControle = (controle) => {
    setControles([...controles, controle]);
  };

  const salvarJSON = () => {
    const data = {
      aquisicoes,
      rfps,
      propostas,
      controles
    };
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dados.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const carregarJSON = (event) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      try {
        const content = JSON.parse(e.target.result);
        setAquisicoes(content.aquisicoes || []);
        setRFPs(content.rfps || []);
        setPropostas(content.propostas || []);
        setControles(content.controles || []);
      } catch (error) {
        console.error('Erro ao carregar arquivo JSON:', error);
        alert('Erro ao carregar arquivo JSON. Verifique o formato do arquivo.');
      }
    };
    fileReader.readAsText(event.target.files[0]);
  };

  return (
    <div className="container">
      <h1>Sistema de Aquisições</h1>
      <div className="section">
        <h2>Adicionar Aquisições</h2>
        <Planejamento adicionarAquisicao={adicionarAquisicao} />
        <ListaAquisições aquisicoes={aquisicoes} />
      </div>
      <div className="section">
        <h2>Criar RFP</h2>
        <CriarRFP adicionarRFP={adicionarRFP} />
        <ListaRFPs rfps={rfps} />
      </div>
      <div className="section">
        <h2>Adicionar Proposta</h2>
        <SimularPropostas adicionarProposta={adicionarProposta} />
        <AvaliarPropostas propostas={propostas} />
      </div>
      <div className="section">
        <h2>Adicionar Controle</h2>
        <ControleFornecedor adicionarControle={adicionarControle} />
        <GestaoContratos controles={controles} />
      </div>
      <button onClick={salvarJSON}>Salvar como JSON</button>
      <label htmlFor="uploadJson">
        <input
          id="uploadJson"
          type="file"
          onChange={carregarJSON}
        />
        <span className="custom-file-upload">Carregar JSON</span>
      </label>
    </div>
  );
};

export default App;
