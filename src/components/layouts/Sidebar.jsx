import React from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import Link from "next/link";
import { menuItems } from "../shared/MenuItems";
import ConnectBtn from "../shared/ConnectBtn";

const Sidebar = ({ show, handleClose, setShowModal }) => {
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
                    <Link onClick={() => setShowModal(true)} className="px-3  text-white text-decoration-none py-3" href="#sign-in">
                        Sign In
                    </Link>
                    <div className="mx-3 nav-button mt-3">
                    <ConnectBtn/>

                    </div>

                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Sidebar;
