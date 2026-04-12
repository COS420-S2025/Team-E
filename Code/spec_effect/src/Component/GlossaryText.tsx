import React from "react";
import { GlossaryEntry } from "./DatabaseGlossaryReader.ts"

// import from firebase and relevant classes along with getAllEntries(): GlossaryEntry[]
// also get firebase emulator working with app after eliot's database stuffs been pulled into main
// for now, just download it and do the activity on the web textbook

interface GlossItem {
    id: string;
    term: string;
    def: string;
}

getAllEntries(): GlossaryEntry[]

const createAnchor = (term: string) =>
    term.toLowerCase().replace(/\s+/g, "-");

const GlossaryText = () => {
    return (<div>
        <h3>Table of Contents</h3>
                <div className="App-row">
                    <div className="App-colBox" style={{width: "50vw", textAlign: "left"}}>
                        <ul style={{paddingLeft: "20vw"}}>
                        {mockGlossData.map((item) => (
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
                {mockGlossData.map((item) => (
                    <div key={item.id}>
                        <h3 id={createAnchor(item.term)}>
                            {item.term}
                        </h3>
                        <p style={{whiteSpace: "pre-line"}}>{item.def}</p>
                    </div>
                ))}
                </div>
        </div>
    );
};
export default GlossaryText;