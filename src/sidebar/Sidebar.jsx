import { SidebarMenus } from '@/utils/sidebarMenus';
import Link from 'next/link';
import Image from 'next/image';
import { Nav } from 'react-bootstrap';
import { usePathname } from 'next/navigation';

const logo = "/svg/sidebarlogo.svg";

const Sidebar = () => {
  const pathname = usePathname();
  const isActive = (href) => pathname === href; 
  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav className="flex-column flex-grow-1">
        <div className="d-flex align-items-center justify-content-center">
          <Link href="/" className="d-none d-lg-block py-4 mb-4">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="img-fluid"
            />
          </Link>
        </div>

        <div>
          {SidebarMenus.slice(0, 4).map((link, index) => (
            <Link
              href={link.path || "/"}
              key={index}
              
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
        </div>

        <div className="my-4 primary-border" ></div>

        <div>
          {SidebarMenus.slice(4, 6).map((link, index) => (
            <Link
              href={link.path || "/"}
              key={index}
              className={` py-3 px-4 mb-0 d-flex align-items-center text-decoration-none  ${isActive(link.path) ? "active-link" : ""}`}
            >
              {link.icon && (
                <div className="d-flex align-items-center justify-content-center me-3">
                  {link.icon}
                </div>
              )}
              <p className="mb-0 fs-6 f-qs text-white">{link.label}</p>
            </Link>
          ))}
        </div>
      </Nav>

    </div>
  );
};

export default Sidebar;
