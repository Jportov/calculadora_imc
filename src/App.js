// src/App.js
import React from 'react';
import './App.css';
import IMCForm from './IMCForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de índice de massa corporal</h1>
        <IMCForm />
      </header>
    </div>
  );
}

export default App;
