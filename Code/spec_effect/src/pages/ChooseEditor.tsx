import React from "react";
import { useNavigate } from "react-router-dom";


const ChooseDatabase: React.FC = () => {
    const navigate = useNavigate();


    return (
        <div className="choose-database-container">
            <h1>Choose a Database</h1>


            <p>Select which database you would like to explore:</p>
           
            <div className="database-buttons" style={{ display: "flex", gap: "3rem", flexWrap: "wrap", justifyContent: "center" }}>
                {/**This is a button to navigate to the glossary database */}
                <button
                    className="database-btn"
                    onClick={() => navigate("/glossary-database")}
                    style={{ textAlign: "center" }}
                >
                    <h2>Glossary Database</h2>
                    <p>Browse glossary terms and definitions</p>
                </button>
               
               {/**This is a button to navigate to the laptop database */}
                <button
                    className="database-btn"
                    onClick={() => navigate("/laptop-database")}
                    style={{ textAlign: "center" }}
                >
                    <h2>Laptop Database</h2>
                    <p>Browse laptop specifications and details</p>
                </button>
            </div>
        </div>
    );
};


export default ChooseDatabase;