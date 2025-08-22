import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SecurityProvider } from './context/SecurityContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <SecurityProvider>
      <Router>
        <div className="app">
          <Header currentPage={currentPage} onPageChange={handlePageChange} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/innovation" element={<Home />} />
              <Route path="/markets" element={<Home />} />
              <Route path="/locations" element={<Home />} />
              <Route path="/careers" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SecurityProvider>
  );
}

export default App;
