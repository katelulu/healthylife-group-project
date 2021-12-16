import React from 'react';
import * as FaIcons from 'react-icons/fa';


export const SidebarData = [
    {
        title: 'Home',
        path: 'home',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'Food',
        path: 'food',
        icon: <FaIcons.FaUtensils />,
        cName: 'nav-text'
    },
    {
        title: 'Sport',
        path: 'excercises',
        icon: <FaIcons.FaRunning />,
        cName: 'nav-text'
    },
    {
        title: 'Drinks',
        path: 'drinks',
        icon: <FaIcons.FaBlender />,
        cName: 'nav-text'
    }
]