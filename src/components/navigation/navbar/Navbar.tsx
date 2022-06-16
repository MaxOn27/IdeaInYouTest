import React, {FC, Fragment, useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom";
import {IconContext} from "react-icons";

import "../Navigation.css"
import Sidebar from "../sidebar/Sidebar";

const Navbar: FC = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Fragment>
            <IconContext.Provider value={{color: "#fff"}}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                       <Sidebar/>
                    </ul>
                </nav>
            </IconContext.Provider>
        </Fragment>
    );
};

export default Navbar;