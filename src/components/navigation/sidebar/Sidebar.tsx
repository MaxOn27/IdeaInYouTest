import React, {FC, Fragment} from 'react';
import {SidebarData} from "./SidebarData";
import {Link} from "react-router-dom";

const Sidebar: FC = () => {
    return (
        <Fragment>
            {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </Fragment>
    );
};

export default Sidebar;