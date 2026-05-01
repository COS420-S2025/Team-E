import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatabaseList from "../Component/GlossaryDatabaseList";
import {
  getAllGlossaryEntries,
  GlossaryEntry,
  deleteGlossaryEntry,
} from "../DatabaseManager";

const GlossaryDatabase = () => {
  const navigate = useNavigate();
  /**This will store the list of glossary database items currently shown to the client */
  const [glossaryItems, setGlossaryItems] = useState<GlossaryEntry[]>([]);

  useEffect(() => {
    const fetchGlossaryItems = async () => {
      try {
        const entries = await getAllGlossaryEntries();
        setGlossaryItems(entries);
      } catch (error) {
        console.error("Error fetching glossary items:", error);
      }
    };

    fetchGlossaryItems();
  }, []);

  /**moves to the add page*/
  const handleAddGlossary = () => {
    navigate("/AddToGlossaryDatabase");
  };

  /**probably will change this to do it on the database side */
  const handleRemove = async (id: string) => {
    const success = await deleteGlossaryEntry(id);
    if (success) {
      console.log("Laptop entry with ID ", id, " deleted successfully.");
    }
    navigate(0);
  };

  /**shows a button to add a new glossary term, and the list of existing terms */
  return (
    <div style={{ padding: "2rem" }}>
      <button
        onClick={() => navigate("/choose-editor")}
        style={{ display: "block", marginRight: "auto" }}
      >
        Go Back
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <h1>Glossary Database</h1>
        <button
          onClick={handleAddGlossary}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Add to Glossary
        </button>
      </div>

      {/**calls the database list component */}
      <DatabaseList
        items={glossaryItems}
        onRemove={handleRemove}
        emptyMessage="No glossary terms available."
      />
    </div>
  );
};

export default GlossaryDatabase;
