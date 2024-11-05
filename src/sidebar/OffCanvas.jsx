import { Image, Offcanvas } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { SidebarMenus } from '@/utils/sidebarMenus';
import { usePathname } from 'next/navigation';

const logo = '/svg/sidebarlogo.svg';

const OffCanvas = ({ showSidebar, handleCloseSidebar }) => {
    const pathname = usePathname();
    const isActive = (href) => pathname === href; 
    return (
        <Offcanvas style={{ width: '300px', background:"#030b15",  }} show={showSidebar} onHide={handleCloseSidebar} placement="start"
                    className=" smooth-transition"
        >
            <Offcanvas.Header closeButton className=" custom-close-button">
                <Offcanvas.Title className="fw-semibold" style={{ color: 'var(--primary-color)' }}>
                    <Image src={logo} alt="Logo" style={{ height: '32px' }} />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
                {SidebarMenus.slice(0, 4).map((link, index) => (
                    <Link
                        href={link.path || "/"}
                        key={index}
onClick={handleCloseSidebar}
                        className={` py-3 px-4 mb-0 d-flex align-items-center text-decoration-none ${isActive(link.path) ? "active-link" : ""}`}
                    >
                        {link.icon && (
                            <div className="d-flex align-items-center justify-content-center me-3">
                                {link.icon}
                            </div>
                        )}
                        <p className="mb-0 fs-6 f-qs text-white">{link.label}</p>
                    </Link>
                ))}
                <div className="my-4 primary-border" ></div>

                {SidebarMenus.slice(4, 6).map((link, index) => (
                    <Link
                        href={link.path || "/"}
                        key={index}
                        onClick={handleCloseSidebar}
                        className={` py-3 px-4 mb-0 d-flex align-items-center text-decoration-none ${isActive(link.path) ? "active-link" : ""}`}
                    >
                        {link.icon && (
                            <div className="d-flex align-items-center justify-content-center me-3">
                                {link.icon}
                            </div>
                        )}
                        <p className="mb-0 fs-6 f-qs text-white">{link.label}</p>
                    </Link>
                ))}

            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default OffCanvas;
