import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
         return <Home onNavigate={setCurrentPage} />; 
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />; 
      case 'portfolio':
        return <Portfolio onNavigate={setCurrentPage} />; 
      case 'contact':
        return <Contact />;
      default:
      return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />  {/* ✅ pass setCurrentPage */}
    </div>
  );
}

export default App;
