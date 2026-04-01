import React, { useState} from 'react';

/** creates an interface that stores value on search */
interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    };
    
    return (
        <input type="text" placeholder="Search for laptop based on your needs..." value={query} onChange={handleChange}  style={{width: '49vw', height: '40px', border: '2px solid #282c34', fontSize: '23px'}}/>
    );
};

export default SearchBar;