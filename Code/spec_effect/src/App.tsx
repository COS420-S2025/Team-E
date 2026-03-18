import React, { useState } from "react";
import "./App.css";
import seLogo from "./Images/SpecEffect_Logo.png";
import Home from './pages/Home';
import About from './pages/About';
import Glossary from './pages/Glossary';



function App() {
    const [page, setPage] = useState<'home'|'about'|'glossary'>('home');

    const renderPage = () => {
        switch (page) {
            case 'about':
                return <About />;
            case 'glossary':
                return <Glossary />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src = {seLogo} alt="" style={{ width: '50px', height: 'auto', marginRight: '10px' }}/> SpecEffect
            </header>
            <header className="App-subHeader">
                <button className="App-headerButtonStyle" onClick={() => setPage('home')}>Home</button>
                <button className="App-headerButtonStyle" onClick={() => setPage('glossary')}>Glossary</button>
                <button className="App-headerButtonStyle" onClick={() => setPage('about')}>About</button>
            </header>
            {renderPage()}
            
            
        </div>
    );
}

export default App;

            