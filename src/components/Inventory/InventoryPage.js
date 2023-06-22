import React from 'react';
import { Link } from 'react-router-dom';
import InventorySearchBar from './InventorySearchBar';
import InventoryList from './InventoryList';
import { NavBar } from '../nav/NavBar';
import "./Inventory.css";

const InventoryPage = () => {
    return (
        <div>
            <NavBar />
            <h1>
                <Link to="/">Finding MiMo's Instruments</Link>
            </h1>
            <h2>Inventory Page</h2>
            <InventorySearchBar />
            <InventoryList />
        </div>
    );
};

export default InventoryPage;
