import React from 'react';
import './App.css';
import { Card } from '@material-ui/core';
import Stepper from './Stepper'

const CardStyle = {
  height: '500px',
  width: '1000px',
  backgroundColor: '#E6E6E6'
}

function App() {
  return (
    <div className="App">
      <Card elevation={3} style={CardStyle}>
        <Stepper / >
      </Card>
    </div>
  );
}

export default App;
