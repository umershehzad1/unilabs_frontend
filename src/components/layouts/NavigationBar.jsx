"use client"
import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { menuItems } from '../shared/MenuItems'
import Image from 'next/image'
import logo from "../../assets/logo.png"
import Link from 'next/link'
const NavigationBar = () => {


  return (
    <>
      <Container>
        <Navbar expand="lg" className="nav-bg stick-top mt-4 px-3 py-0">
          <Navbar.Brand href="#">
            <Image src={logo} width={50} height={50} alt='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {menuItems.map((link, index) => (
                <Link className='mx-3 text-white text-decoration-none' key={index} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </Nav>
            <Form className="d-flex gap-2 align-items-center">
              <Link className='mx-3 text-white text-decoration-none' href="#sign-in">Sign In</Link>
              <Button className='py-2 px-3'>Connect to Wallet</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  )
}

export default NavigationBar
