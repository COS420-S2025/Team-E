import React from "react";
import "./App.css";
import seLogo from "./Images/SpecEffect_Logo.png"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src = {seLogo} alt="" style={{ width: '50px', height: 'auto', marginRight: '10px' }}/> SpecEffect
            </header>
            <header className="App-subHeader">
                glossary/about buttons and search bar here maybe
            </header>
            <p>
                Grace Cochran, Steven Harrington, Eliot Cole, Caramon Cotroneo
            </p>
        </div>
    );
}

export default App;
