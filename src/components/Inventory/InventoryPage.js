import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventorySearchBar from './InventorySearchBar';
import InventoryList from './InventoryList';
import { NavBar } from '../nav/NavBar';
import "./Inventory.css";


const InventoryPage = () => {
    const [filterTerm, setFilterTerm] = useState('');
    const [filterTypes, setFilterTypes] = useState([]);

    const handleFilter = (term, types) => {
        setFilterTerm(term);
        setFilterTypes(types);
    };

    return (
        <div>
            <NavBar />
            <div className='background-image'></div>
            <h1>
                <Link to="/">Finding MiMo's Instruments</Link>
            </h1>
            <h2>Inventory Page</h2>
            <div className='InventorySearchBar' ><InventorySearchBar onFilter={handleFilter} /></div>
            <InventoryList filterTerm={filterTerm} filterTypes={filterTypes} />
        </div>
    );
};

export default InventoryPage;
