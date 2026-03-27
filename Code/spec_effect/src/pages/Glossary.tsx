import React from 'react';
import GlossaryText from '../Component/GlossaryText';
const Glossary = () => {
    return (<div>
        <h2>Glossary Page</h2>
                <div className="App-row">
                    <div className="App-colBox" style={{width: "80vw", overflowY: "scroll",}} data-testid="glossTextHere">
                        <GlossaryText></GlossaryText>
                    </div>
                </div>
        </div>
    );
};
export default Glossary;