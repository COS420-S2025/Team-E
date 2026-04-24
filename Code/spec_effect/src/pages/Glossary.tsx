import React from "react";
import GlossaryText from "../Component/GlossaryText";
import GlosToTopBut from "../Component/GlosToTopBut";
const Glossary = () => {
    return (
        <div>
            <h2>Glossary Page</h2>
            <div className="App-row">
                <div
                    className="App-colBox"
                    style={{ width: "80vw" }}
                    data-testid="glossTextHere">
                    <GlossaryText></GlossaryText>
                </div>
            </div>
            <GlosToTopBut></GlosToTopBut>
        </div>
    );
};
export default Glossary;
