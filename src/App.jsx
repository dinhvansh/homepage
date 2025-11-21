import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white font-sans text-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
