import React from "react";

/* NOTE:
I'm expecting each item in the glossary database to have an ID number, a string for a term’s name, and a longer string defining the term. Im also assuming the glossary database is already in alphabetical order in terms of term name.

The table of contents divider will containing a list of links that are labeled after each term name, and when clicked, scroll down to the definition of its term. The second divider after it will print the terms and definitions straight from the database, making the term names h3 and tying them to the links established in the table of contents divider.
*/

const GlossaryText = () => {
    return (<div>
        <h3>Table of Contents</h3>
                <div className="App-row">
                    <div className="App-colBox" style={{width: "50vw"}}>
                        list of links goes here 
                    </div>
                </div>
                <div>
                    alll the text goes here
                </div>
        </div>
    );
};
export default GlossaryText;