import React, {useState, useMemo} from 'react';
import { useNavigate } from "react-router-dom";
import SearchBar from '../Component/SearchBar'
import { Item } from '../types';

/** fluff data to test out the search bar */
const mockData: Item[] = [
    {id: 1, name: "HP Pavilion 15-ec2004AX Gaming Laptop"},
    {id: 2, name: "Asus Vivobook 16X 2022 M1603QA-MB502WS"},
    {id: 3, name: "Asus Vivobook Pro 15 OLED M6500QH-HN701WS"},
    {id: 4, name: "Asus TUF Gaming A15 FA506IHRZ-HN111W"},
    {id: 5, name: "HP 15s-er1501AU"},
    {id: 6, name: "HP Victus 15-fb0040AX Gaming Laptop"},
    {id: 7, name: "Asus Vivobook 16X 2022 M1603QA-MB511WS"},
    {id: 8, name: "Lenovo V15 82C70005UK"},
    {id: 9, name: "Lenovo V15 82KDA00XIH"},
    {id: 10, name: "Asus TUF Gaming A17 FA706IHRB-HX041W Gaming Laptop"},
    {id: 11, name: "HP 15s-eq2212AU"},
    {id: 12, name: "HP 245 G8 62G68PA"},
    {id: 13, name: "Acer One 14 Z2-493"},
    {id: 14, name: "MSI Bravo 15 B5DD-410IN Gaming Laptop"},
    {id: 15, name: "Lenovo IdeaPad Flex 5 82R9008GIN"},
    {id: 16, name: "Lenovo IdeaPad Slim 1 82R10049IN"},
    {id: 17, name: "Lenovo IdeaPad Gaming 3 82K201YAIN"},
    {id: 18, name: "Asus Vivobook Pro 14 OLED M3400QA-KM502WS Gaming Laptop"},
    {id: 19, name: "Lenovo IdeaPad Gaming 3 82K201UEIN"},
    {id: 20, name: "Asus Vivobook Pro 15 OLED M6500IH-HN701WS"}
    ];

const Home = () => {
    // Creating navigation to laptop page 
    const navigate = useNavigate();
    
        const goToLaptopPage = () => {
            navigate("/LaptopPage");
        };
    
    /** creates a variable to hold the search */
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query.toLowerCase());
    };

    /** filters the data bases on what is written in the search bar */
    const filteredItems = useMemo(() => {
        return mockData.filter(item => item.name.toLowerCase().includes(searchQuery));
    }, [searchQuery]);

    /** divides the home page into three sections a filter sec, search bar and results section */
    return (<div>
        <h2>Home Page</h2>
            <div className="App-row">
                <div className="App-colBox" style = {{ width: '25vw'}}>
                        Soon to be filters divider
                </div>
                <div style = {{verticalAlign: 'top'}}>
                    <div className="App-colBox" data-testid="searchBarDiv" style={{textAlign: 'left'}}>
                        <SearchBar onSearch= {handleSearch}/>
                    </div>
                    <div className="scroll-box" data-testid="catalogDiv" style={{textAlign: 'left'}}>
                        {filteredItems.map(item => (<li key={item.id}> 
                            <button className="search-entry-button" onClick={goToLaptopPage}>
                                {item.name}
                            </button>
                        </li>))}

                        {filteredItems.length === 0 && searchQuery && <p>No result found for {searchQuery}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
