import React from "react";
const Home = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <div className="App-row">
                <div
                    className="App-colBox"
                    style={{ width: "150px", height: "370px" }}>
                    Soon to be Filter row divider
                </div>
                <div>
                    <div
                        className="App-colBox"
                        data-testid="searchBarDiv"
                        style={{ width: "900px", height: "20px" }}>
                        Soon to be Search Bar divider
                    </div>
                    <div
                        className="App-colBox"
                        data-testid="catalogDiv"
                        style={{ width: "900px", height: "300px" }}>
                        Soon to be Search results divider
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
