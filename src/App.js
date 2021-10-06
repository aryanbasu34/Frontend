import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  

  return (
    <div>
      <Router>
        <Route path="/" component={Login} exact />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
