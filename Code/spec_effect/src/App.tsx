import React from "react";
import "./App.css";
import seLogo from "./Images/SpecEffect_Logo.png";
import NavBar from "./Component/NavBar";
import RoutesComponent from "./Component/Routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/" style={{ textDecoration: "none" }} className="App-header">
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
        </Link>
      </header>
      <header className="App-subHeader">
        <NavBar />
      </header>
      <RoutesComponent />
    </div>
  );
}

export default App;
