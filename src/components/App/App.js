import React from 'react';
import Routes from '../../containers/Routes/Routes';
import { Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Route to="/" component={Routes} />
    </div>
  );
};

export default App;
