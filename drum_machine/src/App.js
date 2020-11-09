import './App.css';
import React from 'react';
import Header from './components/Header';
import DrumMachine from './components/DrumMachine';

function App() {
  return (
    <div className="App">
      <Header title="Drum Machine"/>
      <DrumMachine />
    </div>
  );
}
export default App;
