import React from 'react';
import Header from './components/header/Header';
import Form from './components/Form';
import BottomIndicator from './components/BottomIndicator';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header/>
      <Form />
      <BottomIndicator />
    </div>
  );
}

export default App;
