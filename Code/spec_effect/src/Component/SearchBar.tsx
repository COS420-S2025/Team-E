import React from 'react';

interface SearchBarProps {
    query: string;
    setQuery: (query: string) => void;
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery, placeholder = "Search..."}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };
    
    return (
        <input type="text" placeholder={placeholder} value={query} onChange={handleChange}  style={{width: '500px', height: '20px'}}/>
    );
};

export default SearchBar;