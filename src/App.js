import React, {useState} from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/header';
import Footer from './component/footer';
import About from './pages/about';
import Projects from './pages/projects';
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
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default App;
