// src/IMCForm.js
import React, { useState } from 'react';

function IMCForm() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    const alturaMetros = altura / 100;
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    setIMC(imcCalculado);
    setClassificacao(obterClassificacao(imcCalculado));
  };

  const obterClassificacao = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  };

  return (
    <div>
      <form onSubmit={calcularIMC}>
        <div>
          <label>Altura (cm):</label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calcular</button>
      </form>
      {imc && (
        <div>
          <h3>Seu IMC é: {imc}</h3>
          <h4>Classificação: {classificacao}</h4>
        </div>
      )}
    </div>
  );
}

export default IMCForm;
