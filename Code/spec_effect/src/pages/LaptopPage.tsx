import React from 'react';

// note to self: use useState so that when clicked, the star button gets filled in, and text like the login page's errors show up
const LaptopPage = () => {
    return (<div>
                <div className="App-row">
                    <div className="App-colBox" style={{width: "80vw", flexDirection: "row", display: "flex", justifyContent: "center"}} data-testid="laptop-title">
                        <div style={{flex: "1"}}></div>
                        <h2 style={{margin: "7px", alignSelf: "center"}}>Laptop Name Here</h2>
                        <div style={{flex: "1"}}>
                            <button style={{fontSize: "26px"}}>☆</button>
                        </div>
                    </div>
                </div>

                <div className="App-row">
                    <div className="App-colBox" style={{width: "80vw", overflowX: "auto"}} data-testid="laptop-items">
                        <div className="App-row">

                            <div className="App-colBox">
                                <h3 style={{margin: "2px", marginBottom: "17px"}}>Specs</h3>
                                insert stuff from firebase here 
                            </div>
                            
                            <div className="App-colBox">
                                <h3 style={{margin: "2px", marginBottom: "17px"}}>Uses</h3>
                                insert stuff from firebase here 
                            </div>

                        </div>  
                    </div>
                </div>
        </div>
    );
};
export default LaptopPage;