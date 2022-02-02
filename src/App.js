import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './router';
import Header from './components/Header';

function App() {
  const isAuthenticated = false;
  const routes = useRoutes(isAuthenticated);

  return (
    <Router>
      <div className="app">
        <Header />
        {routes}
      </div>
    </Router>
  );
}

export default App;
