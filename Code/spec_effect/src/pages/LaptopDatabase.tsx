import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatabaseList from "../Component/DatabaseList";

const LaptopDatabase = () => {
    const navigate = useNavigate();
    /**This will store the list of laptop database items currently shown to the client */
    const [laptopItems, setLaptopItems] = useState(["Dell XPS 13", "MacBook Pro", "HP Pavilion", "Lenovo ThinkPad"]);

    /**moves to the add page */
    const handleAddLaptop = () => {
        navigate("/AddToLaptopDatabase");
    };

    /**removes, but probably have to be changed to do it on the database side */
    const handleRemove = (item: string) => {
        setLaptopItems(laptopItems.filter((laptop) => laptop !== item));
    };

    /**shows a button to add a new laptop, and the list of existing laptops */
    return (
        <div style={{ padding: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <h1>Laptop Database</h1>
                <button
                    onClick={handleAddLaptop}
                    style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "1rem"
                    }}
                >
                    Add to Laptop Database
                </button>
            </div>
            {/**calls the database list component */}
            <DatabaseList items={laptopItems} onRemove={handleRemove} emptyMessage="No laptop entries available." />
        </div>
    );
};

export default LaptopDatabase;
