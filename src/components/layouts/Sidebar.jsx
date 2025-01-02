import Link from "next/link";
import { Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import ConnectBtn from "../shared/ConnectBtn";
import { menuItems } from "../shared/MenuItems";
import { usePathname } from "next/navigation";

const Sidebar = ({ show, handleClose, setShowModal }) => {
    const pathname = usePathname();
    const isActive = (href) => href === pathname;

    return (
        <Offcanvas
            show={show}
            onHide={handleClose}
            id="offcanvasNavbar"
            className="offcanvasNavbar bg-dark text-light"
            placement="end"
            scroll={true}
        >
            <Offcanvas.Header closeButton className="d-flex justify-content-between align-items-center">
                <Navbar.Brand as={Link} href={"/"} style={{ width: "60px" }}>
                    <Image
                        src={"/logo.png"}
                        width={100}
                        height={50}
                        alt="logo"
                        className="logo"
                        style={{ objectFit: "contain" }}
                    />
                </Navbar.Brand>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
                <Nav className="flex-column">
                    {menuItems.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={handleClose}
                            target={link.href.endsWith(".pdf") ? "_blank" : "_self"}
                            rel={link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                            className={`nav-item text-decoration-none py-3 px-3 text-white ${isActive(link.href) ? "active-link" : ""
                                }`}
                            style={{
                                borderBottom: "1px solid #4caf50",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* <Link
                        onClick={() => { setShowModal(true), handleClose() }}
                        href="#sign-in"
                        className="nav-item text-decoration-none py-3 px-3 text-white"
                        style={{
                            borderBottom: "1px solid #4caf50",
                            transition: "all 0.3s ease-in-out",
                        }}
                    >
                        Sign In
                    </Link> */}

                    <div className="mx-3 nav-button mt-4" onClick={handleClose}>
                        <ConnectBtn />
                    </div>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Sidebar;
