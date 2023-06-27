import React, { useEffect, useState } from 'react';

const InventorySearchBar = ({ onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTypes, setSelectedTypes] = useState([]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleTypeChange = (e) => {
        const typeValue = e.target.value;
        setSelectedTypes((prevSelectedTypes) => {
            if (prevSelectedTypes.includes(typeValue)) {
                return prevSelectedTypes.filter((type) => type !== typeValue);
            } else {
                return [...prevSelectedTypes, typeValue];
            }
        });
    };

    const handleFilter = (e) => {
        e.preventDefault();
        // Pass the search term and selected types to the parent component
        onFilter(searchTerm, selectedTypes);
    };

    return (
        <div>
            <form onSubmit={handleFilter}>
                <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search by name" />
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="1"
                            checked={selectedTypes.includes("1")}
                            onChange={handleTypeChange}
                        />
                        Guitars
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="2"
                            checked={selectedTypes.includes("2")}
                            onChange={handleTypeChange}
                        />
                        Basses & Ukuleles
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="3"
                            checked={selectedTypes.includes("3")}
                            onChange={handleTypeChange}
                        />
                        Drum & Percussion
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="4"
                            checked={selectedTypes.includes("4")}
                            onChange={handleTypeChange}
                        />
                        Microphones and Midi Instruments
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="5"
                            checked={selectedTypes.includes("5")}
                            onChange={handleTypeChange}
                        />
                        Amp's Cabinets & PA's
                    </label>
                </div>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default InventorySearchBar;
