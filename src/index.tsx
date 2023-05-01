import React from 'react'; 
import Header from './Header';
import LandingPage from './LandingPage'; 
import AboutPage from './AboutPage'; 
import ReactDOM from 'react-dom'; 

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <LandingPage />
        </div>
    )
}; 

ReactDOM.render(<App />, document.getElementById('root')); 