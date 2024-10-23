"use client";
import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { menuItems } from "../shared/MenuItems";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { FaBarsStaggered } from "react-icons/fa6";


const NavigationBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Navbar expand="lg" className="nav-bg stick-top mt-4 px-3 py-0 overflow-hidden">
          <Navbar.Brand href="#" style={{ width: "50px" }}>
            <Image
              src={logo}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              alt="logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            className="nav-button d-flex align-items-center py-2"
            aria-controls="offcanvasNavbar"
            onClick={handleShow}
          >
            <FaBarsStaggered size={26} className="text-white" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0 d-none d-lg-block" style={{ maxHeight: "100px" }} navbarScroll>
              {menuItems.map((link, index) => (
                <Link className="mx-3 text-white text-decoration-none" key={index} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </Nav>
            <Form className="d-flex gap-2 align-items-center d-none d-lg-block">
              <Link className="mx-3 text-white text-decoration-none" href="#sign-in">
                Sign In
              </Link>
              <Button className="py-2 px-3 nav-button">Connect to Wallet</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default NavigationBar;
