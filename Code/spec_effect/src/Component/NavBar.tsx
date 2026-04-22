import React from 'react';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate("/about");
    };

    const goToHome = () => {
        navigate("/");
    };

    const goToGlossary = () => {
        navigate("/glossary");
    };

    const goToAdminLogin = () => {
        navigate("/adminlogin");
    };

    return (

    <div>
    <button className="App-headerButtonStyle" onClick={goToHome}>
            Home
    </button>
    <button className="App-headerButtonStyle" onClick={goToGlossary}>
            Glossary
    </button>
    <button className="App-headerButtonStyle" onClick={goToAbout}>
            About
    </button>
    <button className="App-headerButtonStyle" onClick={goToAdminLogin}>
            Admin Login
    </button>
    </div>

    )
    
};
export default NavBar;