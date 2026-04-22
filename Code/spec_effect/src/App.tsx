import React from "react";
import "./App.css";
import seLogo from "./Images/SpecEffect_Logo.png";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Glossary from "./pages/Glossary";
import AdminLogin from "./pages/AdminLogin";
import ChooseEditor from "./pages/ChooseEditor";
import GlossaryDatabase from "./pages/GlossaryEditor";
import LaptopDatabase from "./pages/LaptopEditor";
import LaptopPage from "./pages/LaptopPage";
import AddToGlossaryDatabase from "./pages/AddToGlossaryEditor";
import AddToLaptopDatabase from "./pages/AddToLaptopEditor";


function App() {
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
        <div className="App">
            <header className="App-header">
                <img
                    src={seLogo}
                    alt=""
                    style={{
                        width: "50px",
                        height: "auto",
                        marginRight: "10px",
                    }}
                />{" "}
                SpecEffect
            </header>
            <header className="App-subHeader">
                <button className="App-headerButtonStyle" onClick={goToHome}>
                    Home
                </button>
                <button
                    className="App-headerButtonStyle"
                    onClick={goToGlossary}>
                    Glossary
                </button>
                <button className="App-headerButtonStyle" onClick={goToAbout}>
                    About
                </button>
                <button
                    className="App-headerButtonStyle"
                    onClick={goToAdminLogin}>
                    Admin Login
                </button>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/glossary" element={<Glossary />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/choose-editor" element={<ChooseEditor />} />
                <Route
                    path="/glossary-database"
                    element={<GlossaryDatabase />}
                />
                <Route path="/laptop-database" element={<LaptopDatabase />} />
                <Route path="/LaptopPage" element={<LaptopPage />} />
                <Route path="/AddToGlossaryDatabase" element={<AddToGlossaryDatabase />} />
                <Route path="/AddToLaptopDatabase" element={<AddToLaptopDatabase />} />
            </Routes>
        </div>
    );
}

export default App;
