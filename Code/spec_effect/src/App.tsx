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
                <button className="App-headerButtonStyle">About</button> 
                <button className="App-headerButtonStyle">Glossary</button>
            </header>
            
            <div className="App-row">
                <div className="App-box">
                    <header className="App-filterHeader">Filters</header>
                    more text 
                </div>
                <div>
                    <div className="App-colSearch" style={{height: '7px'}}>
                        Soon to be Search Bar
                    </div>
                    <div className="App-colSearch"style={{overflowY: 'scroll'}}>
                        Soon to be Search results
                    </div>
                </div>
            </div>
            <div className="App-footer">
                Website by Grace Cochran, Eliot Cole, Steven Harrington, & Caramon Cotroneo
            </div>
        </div>
    );
}

export default App;
