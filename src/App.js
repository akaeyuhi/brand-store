import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { useRoutes } from './router';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomePage from './views/HomePage';

function App() {
  //const isAuthenticated = false;
  //const routes = useRoutes(isAuthenticated);

  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
