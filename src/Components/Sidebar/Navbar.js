import React from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { SidebarData } from './SideMenuData';
import { Link } from 'react-router-dom';
import './navbar.css'


export default function Navbar() {
    return ( 
      <div>
        <ProSidebar>
            <Menu >
                <ul className="nav-menu-items" >
                    {SidebarData.map((item, index) => {
                        return (
                            <MenuItem key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </MenuItem>
                        )
                    })}
                </ul>
            </Menu>
        </ProSidebar>
    </div >
    )
}
