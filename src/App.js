import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
