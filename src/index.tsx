import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react'; 
import Header from './Header';
import LandingPage from './LandingPage'; 
import AboutPage from './AboutPage';
import ReactDOM from 'react-dom'; 

function App() {
    return (
      <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
      </div>
    );
  };

ReactDOM.render(<App />, document.getElementById('root')); 