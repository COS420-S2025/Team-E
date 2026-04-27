import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Component/SearchBar";
import Filter, { buildLaptopFilters } from "../Component/Filter";
import { Laptop, searchLaptopsWithFilters } from "../DatabaseManager";

const Home = () => {
    // Creating navigation to laptop page 
    const navigate = useNavigate();


  /** creates a variable to hold the search */
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedFilterIds, setAppliedFilterIds] = useState<string[]>([]);
  const [laptops, setLaptops] = useState<Laptop[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  useEffect(() => {
    let mounted = true;
    const loadLaptops = async () => {
      try {
        const laptopsFromDb = await searchLaptopsWithFilters(
          buildLaptopFilters(appliedFilterIds),
        );
        if (mounted) {
          setLaptops(laptopsFromDb);
        }
      } catch {
        if (mounted) {
          setLaptops([]);
        }
      }
    };

    loadLaptops();
    return () => {
      mounted = false;
    };
  }, [appliedFilterIds]);

  /** filters the data based on what is written in the search bar */
  const filteredItems = useMemo(() => {
    return laptops.filter((item) =>
      item.name.toLowerCase().includes(searchQuery),
    );
  }, [laptops, searchQuery]);

  /** divides the home page into three sections a filter sec, search bar and results section */
  return (
    <div>
      <h2>Home Page</h2>
      <div className="App-row">
        <div className="App-colBox" style={{ width: "25vw" }}>
          <Filter
            appliedFilterIds={appliedFilterIds}
            onApplyFilters={setAppliedFilterIds}
          />
        </div>
        <div style={{height: "59vw", verticalAlign: "top" }}>
          <div className="App-colBox" data-testid="searchBarDiv" style={{ textAlign: "left" }}>
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="scroll-box" data-testid="catalogDiv" style={{ textAlign: "left" }}>
            {filteredItems.map((item) => (
              <li key={item.id}>
                <button className="search-entry-button" onClick={() => navigate(`/LaptopPage/${item.id}`)}>
                  {item.name}
                </button>
              </li>
            ))}
            {filteredItems.length === 0 && <p>No results found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
