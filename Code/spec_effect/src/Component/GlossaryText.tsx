import React, { useEffect, useState } from "react";
import { getAllGlossaryEntries, GlossaryEntry } from "../DatabaseManager";
import { text } from "stream/consumers";
import { formatDiagnostic } from "typescript";

const createAnchor = (term: string) => term.toLowerCase().replace(/\s+/g, "-");

const GlossaryText = () => {
    const [glossList, setGlossList] = useState<GlossaryEntry[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllGlossaryEntries();
                setGlossList(data);
            } catch (error) {
                console.error("Error fetching glossary entries:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "40px" }}>Table of Contents:</h3>
            <div className="" style={{ width: "50vw", textAlign: "left" }}>
                <ul>
                    {glossList.map((item) => (
                        <li key={item.id}>
                            <a href={`#${createAnchor(item.term)}`}>
                                {item.term}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ marginTop: "2rem" }}>
                {glossList.map((item) => (
                    <div key={item.id} className="glossDef">
                        <h3 id={createAnchor(item.term)}>{item.term}</h3>
                        <p style={{ whiteSpace: "pre-line" }}>
                            {item.definition}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default GlossaryText;
