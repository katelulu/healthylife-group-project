import React from 'react';
import './Sidebar.css'
import { SidebarData } from './SideMenuData';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Sidebar() {

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container className="sidemenu">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto flex-column">
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Nav.Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Nav.Link>
                                </li>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


