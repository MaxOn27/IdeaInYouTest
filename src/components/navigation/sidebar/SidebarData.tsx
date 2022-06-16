import React from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";


export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Upload",
        path: "/upload",
        icon: <AiIcons.AiOutlineCloudUpload />,
        cName: "nav-text"
    },
    {
        title: "Visual projection",
        path: "/visualProjection",
        icon: <RiIcons.RiProjector2Line />,
        cName: "nav-text"
    }
];