import React, { useEffect, useState } from "react";
import { getAllGlossaryEntries, GlossaryEntry } from "../DatabaseManager";

/*
  AI DOCUMENTATION:

Model Used - ChatGPT
File Used In - GlossaryText.tsx
Purpose - Changing the existing code of the component to work with firebase and not rely on premade test data.

Citation - “I have made a Glossary page for a website that utilizes typescript, react, and a component called GlossaryText.tsx. So far I have made the page functional by using an interface and making a constant of it that holds all the terms and definitions. I will need your help to implement an existing firebase database into the GlossaryText component mentioned, as this component does the work of taking the data from the database and printing it out, along with a table of contents.

Each item in the glossary database is expected to have a lowercase ID string, a string for a term's name, and a longer string defining the term. There are also going to be a function from another component class (in which I've already imported) that will gather all this data, getAllEntries(): GlossaryEntry[] .

Here is the code I have so far:
[Pasted code of GlossaryText.tsx]”, https://chatgpt.com/, April 12, 2026. 1:18 pm.
*/

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
              <a href={`#${createAnchor(item.term)}`}>{item.term}</a>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: "2rem" }}>
        {glossList.map((item) => (
          <div key={item.id} className="glossDef">
            <h3 id={createAnchor(item.term)}>{item.term}</h3>
            <p style={{ whiteSpace: "pre-line" }}>{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GlossaryText;
