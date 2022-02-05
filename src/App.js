import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './router';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import { Footer } from './components/Footer';

function App() {
  const isAuthenticated = false;
  const routes = useRoutes(isAuthenticated);

  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        {routes}
        <About />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
