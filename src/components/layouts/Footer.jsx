"use client";

import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FaDiscord, FaFacebook, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
import { menuItems } from "../shared/MenuItems";

const Footer = () => {
    const icons = [
        { icon: FaTelegram, href: "https://t.me/unilab" },
        { icon: FaTwitter, href: "https://twitter.com/unilab" },
        { icon: FaFacebook, href: "https://facebook.com/unilab" },
        { icon: FaYoutube, href: "https://youtube.com/unilab" },
        { icon: FaDiscord, href: "https://discord.gg/unilab" },
    ];

    const resources = [
        { label: "FAQ", href: "faq" },
        { label: "Pay with Card", href: "payWithCard" },
    ];

    return (
        <div className="footer pt-5">
            <Container className="text-white">
                <Row className="py-5">
                    {/* Company Info Section */}
                    <Col md={6} lg={8} className="mb-4 mb-lg-0">
                        <Col lg={6} md={12} className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
                            <div className="d-flex gap-2 align-items-center">

                                <Image
                                    src={"/logo.png"}
                                    width={100}
                                    height={50}
                                    alt="logo"
                                    className="logo"
                                />
                                <h1 className="fw-bold mb-0">Unilabs</h1>
                            </div>
                            <p className="gray mt-3">
                                Leverage the artificial intelligence advantage with the first DeFi launchpad identifying opportunities across the crypto market. Enjoy unprecedented gains and enhanced transparency.
                            </p>
                        </Col>
                    </Col>

                    {/* Links Section */}
                    <Col md={6} lg={4}>
                        <Row className="footer-links">
                            <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
                                <h5 className="text-white fw-bold text-uppercase">Company</h5>
                                {menuItems.slice(0, 4).map((link, index) => (
                                    <Link key={index} href={link.href} className="text-decoration-none d-block py-1 gray">
                                        {link.label}
                                    </Link>
                                ))}
                            </Col>
                            <Col xs={12} md={6} className="text-center text-md-start">
                                <h5 className="text-white fw-bold text-uppercase">Resources</h5>
                                {menuItems.slice(4, 8).map((link, index) => (
                                    <Link key={index} href={link.href} className="text-decoration-none d-block py-1 gray">
                                        {link.label}
                                    </Link>
                                ))}
                                {resources.map((link, index) => (
                                    <Link key={index} href={link.href} className="text-decoration-none d-block py-1 gray">
                                        {link.label}
                                    </Link>
                                ))}
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Footer Bottom Section */}
                <div className="text-center pb-2">
                    <p style={{ color: "#ECEBF6" }}>Copyright © 2024 Unilabs. All Rights Reserved.</p>
                    <div className="d-flex justify-content-center gap-3 social-icons">
                        {icons.map((item, index) => (
                            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                                <item.icon className="footer-icon" />
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
