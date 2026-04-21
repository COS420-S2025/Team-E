import React, { useEffect, useState } from "react";
import { getAllGlossaryEntries, GlossaryEntry } from "../DatabaseManager";

const createAnchor = (term: string) =>
    term.toLowerCase().replace(/\s+/g, "-");

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


    return (<div>
        <h3>Table of Contents</h3>
                <div className="App-row">
                    <div className="App-colBox" style={{width: "50vw", textAlign: "left"}}>
                        <ul style={{paddingLeft: "20vw"}}>
                        {glossList.map((item) => (
                            <li key={item.id}>
                                <a href={`#${createAnchor(item.term)}`}>
                                    {item.term}
                                </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                <div style={{ marginTop: "2rem" }}>
                {glossList.map((item) => (
                    <div key={item.id}>
                        <h3 id={createAnchor(item.term)}>
                            {item.term}
                        </h3>
                        <p style={{whiteSpace: "pre-line"}}>{item.definition}</p>
                    </div>
                ))}
                </div>
        </div>
    );
};
export default GlossaryText;