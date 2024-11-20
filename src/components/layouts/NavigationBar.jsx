"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { FaBarsStaggered } from "react-icons/fa6";
import { menuItems } from "../shared/MenuItems";
import CustomModal from "../shared/SignInModal";
import Sidebar from "./Sidebar";
import ConnectBtn from "../shared/ConnectBtn";

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const [isNavbarScroll, SetIsNavbarScroll] = useState(false);
  const pathname = usePathname();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      SetIsNavbarScroll(true);
    } else {
      SetIsNavbarScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CustomModal setShowModal={setShowModal} showModal={showModal} />
      <Navbar expand="lg" className="fixed-top mt-lg-4  mx-md-2">
        <Container
          className="nav-bg px-md-3 py-0 overflow-hidden"
          style={{
            background: isNavbarScroll ? "linear-gradient(to right,#2E0E41, #170B2C )" : "",
            borderRadius: isNavbarScroll ? "50px" : "",
            transition: "background 0.5s ease-in-out",
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
                  className={`mx-4  ${pathname === link.href ? "text-green" : "text-white"
                    }`}
                  key={index}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </Nav>
            <Form>
              <div className="d-lg-block d-none">
                <Link onClick={() => setShowModal(true)} className="mx-4 text-white text-decoration-none" href="">
                  Sign In
                </Link>
              </div>

            </Form>
            <div className="d-flex gap-2 align-items-center d-none d-lg-block">

              <div className="mx-3 nav-button">
                <ConnectBtn />

              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Sidebar setShowModal={setShowModal} show={show} handleClose={handleClose} />
    </>
  );
};

export default NavigationBar;
