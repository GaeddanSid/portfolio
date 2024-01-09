import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
    return (
        <nav className="flex bg-gray-800 p-4 justify-around">
            <ul className="flex">
                <li className="mr-4">
                    <Link className="text-white" to="/">
                        Start
                    </Link>
                </li>
                <li className="mr-4">
                    <Link className="text-white" to="/about">
                        Om Mig
                    </Link>
                </li>
                <li className="mr-4">
                    <Link className="text-white" to="/portfolio">
                        Portfolio
                    </Link>
                </li>
                <li className="mr-4">
                    <Link className="text-white" to="/contact">
                        Kontakt
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
