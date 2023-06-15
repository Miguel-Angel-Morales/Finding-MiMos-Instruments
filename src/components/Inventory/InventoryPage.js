import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InventorySearchBar from './InventorySearchBar';
import InventoryList from './InventoryList';
import { NavBar } from '../nav/NavBar';
import "./Inventory.css";

const InventoryPage = () => {
    const [filteredItems, setFilteredItems] = useState([]);

    const handleFilter = (searchTerm, selectedTypes) => {
        // Perform search/filter logic here
        // Update the filteredItems state based on the search term and selected types
        // ...

        // Example: Filtering logic using console.log
        console.log('Search Term:', searchTerm);
        console.log('Selected Types:', selectedTypes);

        // Update the filteredItems state based on the search term and selected types
        // setFilteredItems(filteredItems);
    };

    return (
        <div>
            <NavBar />
            <h1>
                <Link to="/">Finding MiMo's Instruments</Link>
            </h1>
            <h2>Inventory Page</h2>
            <InventorySearchBar onFilter={handleFilter} />
            <InventoryList items={filteredItems} />
        </div>
    );
};

export default InventoryPage;
