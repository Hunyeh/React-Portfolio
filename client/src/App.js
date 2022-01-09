import React, {useState} from 'react';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
  const [currentPage, setCurrentPage] = useState('About')

  function renderPage() {
    if (currentPage === 'About') {
      return <About/>
    } else if (currentPage === 'Projects') {
        return <Projects/>
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
