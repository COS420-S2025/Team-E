import React, {useState} from 'react';
import SearchBar from '../Component/SearchBar'
const Home = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    return (<div>
        <h2>Home Page</h2>
            <div className="App-row">
                <div className="App-colBox" style={{width: '150px', height: '370px'}}>
                        Soon to be filters divider
                </div>
                <div>
                    <div className="App-colBox" style={{width: '900px', height: '20px',textAlign: 'left'}}>
                        <SearchBar query={searchQuery} setQuery={setSearchQuery}/>
                    </div>
                    <div className="App-colBox" style={{width: '900px', height: '300px',textAlign: 'left'}}>
                        Soon to be Search results divider <br/>
                        {searchQuery}
                    </div>
                </div>
            </div>
    </div>
        
    );
    
};
export default Home;




