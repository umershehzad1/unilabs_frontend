"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdLogin } from "react-icons/md";
import ConnectBtn from "../shared/ConnectBtn";
import { menuItems } from "../shared/MenuItems";
import Sidebar from "./Sidebar";
import { AuthVerify } from "@/utils/auth.utils";

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
  const Auth = AuthVerify()

  return (
    <>
      {/* <CustomModal setShowModal={setShowModal} showModal={true} /> */}
      <Navbar expand="lg" className="fixed-top mt-lg-4  mx-md-2">
        <Container
          className="nav-bg px-md-3 py-0 overflow-hidden"
          style={{
            background: isNavbarScroll
              ? 'rgb(56, 56, 56, 0.95)'
              : "",


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
              className="mx-auto my-2 my-lg-0 d-none d-lg-block"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {menuItems.map((link, index) => (
                <Link
                  className={`mx-xl-4 mx-2  ${pathname === link.href ? "text-green" : "text-white"
                    }`}
                  key={index}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </Nav>
            <Form>
              {!Auth &&
                <div className="d-lg-block d-none">
                  <Button as={Link} className="mx-xl-4 mx-2 text-white  fw-bold transparentBtn px-3 rounded-pill  py-2" style={{ fontFamily: "Neue_Machina!important" }} href="/login">
                    Sign in <MdLogin size={25} className="ms-1" />
                  </Button>
                </div>
              }

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
