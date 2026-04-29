import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        width: "49vw",
      }}
    >
      <input
        type="search"
        placeholder="Search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        aria-label="Search laptops"
        style={{
          flex: 1,
          minWidth: 0,
          height: "40px",
          border: "2px solid #282c34",
          fontSize: "23px",
        }}
      />
      <button
        type="submit"
        aria-label="Search"
        title="Search"
        style={{
          flexShrink: 0,
          width: "40px",
          height: "40px",
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #282c34",
          cursor: "pointer",
          backgroundColor: "#282c34",
          color: "#fff",
        }}
      >
        {/** draws a magnify glass on the button */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-4.3-4.3" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
