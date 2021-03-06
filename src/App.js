import React, { useState } from 'react';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/header';
import Footer from './component/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';

function App() {
  const [currentPage, setCurrentPage] = useState('About')

  function renderPage() {
    if (currentPage === 'About') {
      return <About/>
    } else if (currentPage === 'Portfolio') {
        return <Portfolio/>
    } else if (currentPage === 'Contact') {
      return <Contact/>
    } else {
      return <About/>
    }
  }

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage}/>
      <div className='mainContent'>
      {renderPage()}
      </div>
      
    </div>
  );
}

export default App;
