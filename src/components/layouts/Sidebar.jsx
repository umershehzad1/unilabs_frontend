import React from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import Link from "next/link";
import { menuItems } from "../shared/MenuItems";

const Sidebar = ({ show, handleClose }) => {
    return (
        <Offcanvas show={show} onHide={handleClose} id="offcanvasNavbar" className="offcanvasNavbar bg-black" placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="text-white">Navigation</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
                <Nav className="flex-column">
                    {menuItems.map((link, index) => (
                        <Link className="px-3 text-white text-decoration-none py-3" key={index} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                    <Link className="px-3  text-white text-decoration-none py-3" href="#sign-in">
                        Sign In
                    </Link>
                    <div className="mx-3 mb-3">
                        <Button className="mt-3 py-2 px-3 w-100 nav-button">Connect to Wallet</Button>
                    </div>

                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Sidebar;
