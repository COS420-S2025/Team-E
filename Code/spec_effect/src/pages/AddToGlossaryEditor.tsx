import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {GlossaryEntry, addGlossaryEntry} from "../DatabaseManager";





const AddToGlossaryDatabase = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<GlossaryEntry>({
        id:"",
        term: "",
        definition: "",
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleAdd = async () => {
        //add the datbase function here
        await addGlossaryEntry(formData);
        navigate("/glossary-database");
    };


    return (
        <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
            <h1>Add to Glossary Database</h1>


            <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Term */}
                <div>
                    <label htmlFor="term" style={{ fontWeight: "bold", display: "block", marginBottom: "0.5rem" }}>
                        Term
                    </label>
                    <input
                        id="term"
                        type="text"
                        name="term"
                        value={formData.term}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "0.75rem",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            fontSize: "1rem",
                            boxSizing: "border-box"
                        }}
                        placeholder=""
                    />
                </div>


                {/* Definition */}
                <div>
                    <label htmlFor="definition" style={{ fontWeight: "bold", display: "block", marginBottom: "0.5rem" }}>
                        Definition
                    </label>
                    <textarea
                        id="definition"
                        name="definition"
                        value={formData.definition}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "0.75rem",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            fontSize: "1rem",
                            boxSizing: "border-box",
                            minHeight: "150px",
                            fontFamily: "inherit"
                        }}
                        placeholder=""
                    />
                </div>


                {/* Add Button */}
                <button
                    type="button"
                    onClick={handleAdd}
                    className="add-button"
                >
                    Add Term
                </button>
            </form>
        </div>
    );
};


export default AddToGlossaryDatabase;