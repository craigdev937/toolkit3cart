import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = (): JSX.Element => {
    const [open, setOpen] = React.useState(false);

    const handleClick = (): void => {
        setOpen(!open);
    };

    const closeMenu = (): void => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <nav className="navbar">
                <Link 
                    className="navbar__logo"
                    to="/"><h3>Shopping</h3>
                </Link>
                <aside 
                    className="navbar__icon"
                    onClick={handleClick}
                    >{open ? <FiX /> : <FiMenu />}
                </aside>
                <ul 
                    className={open ? 
                    "navbar__links active" : 
                    "navbar__links"}
                    ><li className="navbar__item">
                        <Link 
                            className="navbar__link"
                            to="/"
                            onClick={closeMenu}
                            >Home
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link 
                            className="navbar__link"
                            to="/category/:category"
                            onClick={closeMenu}
                            >Category
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link 
                            className="navbar__link"
                            to="/cart"
                            onClick={closeMenu}
                            >Cart
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link 
                            className="navbar__link"
                            to="/search/:searchTerm"
                            onClick={closeMenu}
                            >Search
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};


