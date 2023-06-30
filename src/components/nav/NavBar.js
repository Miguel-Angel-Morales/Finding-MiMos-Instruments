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
                    <a>
                < Link className="navbar__link" to="/inventory">
                    Inventory
                </Link>
                </a>
                </button>
            </li>
            {localStorage.getItem("mimo_user") ? (
                <li className="navbar__item navbar__logout">
                    <button className="navbar__link" onClick={handleLogout}>
                        <a>
                        Logout
                        </a>
                    </button>
                </li>
            ) : null}
        </ul>
    );
};
