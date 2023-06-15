import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("mimo_user");
        navigate("/login", { replace: true });
    };

    return (
        <ul className="navbar">
            <li className="navbar__inventory_page">
                <button>
                < Link className="navbar__link" to="/inventory">
                    Inventory
                </Link>
                </button>
            </li>
            {localStorage.getItem("mimo_user") ? (
                <li className="navbar__item navbar__logout">
                    <button className="navbar__link" onClick={handleLogout}>
                        Logout
                    </button>
                </li>
            ) : null}
        </ul>
    );
};
