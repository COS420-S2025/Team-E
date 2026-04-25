import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatabaseList from "../Component/LaptopDatabaseList";
import { getAllLaptops, Laptop, deleteLaptopEntry } from "../DatabaseManager";

const LaptopDatabase = () => {
    const navigate = useNavigate();
    /**This will store the list of laptop database items currently shown to the client */
    const [laptopItems, setLaptopItems] = useState<Laptop[]>([]);

    useEffect(() => {
        const fetchLaptopItems = async () => {
            try{
                const entries = await getAllLaptops();
                setLaptopItems(entries);
            } catch (error) {
                console.error("Error fetching laptop items:", error);
            }
        };
        fetchLaptopItems();
    }, []);

    /**moves to the add page */
    const handleAddLaptop = () => {
        navigate("/AddToLaptopDatabase");
    };

    /**removes, but probably have to be changed to do it on the database side */
    const handleRemove = async (id: string) => {
        const success = await deleteLaptopEntry(id);
        if (success){
            console.log("Laptop entry with ID ", id, " deleted successfully.");
        }
        navigate(0);
    };

    /**shows a button to add a new laptop, and the list of existing laptops */
    return (
        <div style={{ padding: "2rem" }}>
            <button onClick={() => navigate("/choose-editor")} style={{ display: 'block', marginRight: 'auto'}}>Go Back</button>
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
