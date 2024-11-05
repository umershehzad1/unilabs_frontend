"use client";
import React, { useState, useEffect } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { menuItems } from "../shared/MenuItems";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { FaBarsStaggered } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useAccount } from "wagmi";

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const [navbarColor, setNavbarColor] = useState("rgba(0, 0, 0, 0.5)");
  const pathname = usePathname();
  const isConnected = useAccount()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setNavbarColor("black");
    } else {
      setNavbarColor("rgba(0, 0, 0, 0.5)");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <Navbar expand="lg" className="fixed-top mt-4 mx-2">
        <Container
          className="nav-bg px-3 py-0 overflow-hidden"
          style={{
            backgroundColor: navbarColor,
            borderRadius: "50px",
            transition: "background-color 0.5s ease",
          }}
        >
          <Navbar.Brand as={Link} href={"/"} style={{ width: "50px" }}>
            <Image
              src={"/logo.png"}
              width={100}
              height={50}
              alt="logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            className="nav-button d-flex align-items-center py-2 d-lg-none d-block"
            aria-controls="offcanvasNavbar"
            onClick={handleShow}
          >
            <FaBarsStaggered size={26} className="text-white" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 d-none d-lg-block"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {menuItems.map((link, index) => (
                <Link
                  className={`mx-3 text-decoration-none ${pathname === link.href ? "text-green" : "text-white"
                    }`}
                  key={index}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </Nav>
            <Form>
              <div>
                <Link className="mx-3 text-white text-decoration-none" href="#sign-in">
                  Sign In
                </Link>
              </div>

            </Form>
            <div className="d-flex gap-2 align-items-center d-none d-lg-block">

              <div className="mx-3 nav-button">
                {!isConnected ? <w3m-network-button /> : <w3m-button />}

              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Sidebar show={show} handleClose={handleClose} isConnected={isConnected} />
    </>
  );
};

export default NavigationBar;
