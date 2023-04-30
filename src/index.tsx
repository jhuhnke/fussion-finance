import React from 'react'; 
import LandingPage from './LandingPage'; 
import ReactDOM from 'react-dom'; 

const App = () => {
    return (
        <div>
            <LandingPage />
        </div>
    )
}; 

ReactDOM.render(<App />, document.getElementById('root')); 