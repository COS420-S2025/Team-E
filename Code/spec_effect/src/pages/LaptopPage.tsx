import React from 'react';
import { getLaptopById, Laptop } from '../DatabaseManager';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const LaptopPage = () => {

    const {id} = useParams<{id: string}>();
        const [laptop, setLaptop] = useState<Laptop | null>(null);

        useEffect(() => {
            if (!id) return;

            const fetchLaptop = async () => {
                const laptopData = await getLaptopById(id);
                setLaptop(laptopData);
            };

            fetchLaptop();
        }, [id]);

        if (!id) {
            return <div>No Invalid ID provided.</div>;
        }

        if (!laptop) {
            return <div>Laptop not found</div>;
        }

    return (<div>
                <div className="App-row">
                    <div className="App-colBox" style={{width: "80vw", flexDirection: "row", display: "flex", justifyContent: "center"}} data-testid="laptop-title">
                        <div style={{flex: "1"}}></div>
                        <h2 style={{margin: "7px", alignSelf: "center"}}> {laptop.name} </h2>
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