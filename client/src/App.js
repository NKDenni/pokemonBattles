import React from 'react';
import { Router } from '@reach/router'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Start from './views/start'
import './App.scss';

function App() {
  return (
    <div className="App container">
      <div>
        <Navbar />
      </div>
      <div>
      <Router>
        <Start default path="/" />
      </Router>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
