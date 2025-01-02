import { AuthName, AuthVerify } from '@/utils/auth.utils';
import { useAuth } from '@/utils/AuthContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import { CiSettings } from "react-icons/ci";
import { FaSignOutAlt } from 'react-icons/fa';
import { FaBarsStaggered } from "react-icons/fa6";

const SidebarHeader = ({ onLogoClick }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { logout } = useAuth();
    const [user, setUser] = useState({});
    const userName = AuthName();
    const UserVerify = AuthVerify();
    const fullName = ` ${userName?.fullName || ""}`;
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user")) || {};
        setUser(storedUser);
    }, []);

    const handleDropdownToggle = () => {
        setShowDropdown(prev => !prev);
    };

    return (
        <Container>
            <div className="d-flex py-2 justify-content-between align-items-center ">

                <Link href="#"
                    onClick={onLogoClick}
                    className="nav-button d-flex align-items-center p-2 d-lg-none d-block"
                >
                    <FaBarsStaggered size={25} className='text-white' />
                </Link>
                <div className="d-lg-inline-block d-none my-auto">
                </div>
                <div>
                    <div className="d-flex align-items-center">
                        <Dropdown show={showDropdown} onToggle={handleDropdownToggle}>
                            <Dropdown.Toggle
                                as="div" className='caret-none'
                                style={{ cursor: 'pointer' }}
                                id="user-dropdown"
                            >
                                <CiSettings color='white' size={30} />
                            </Dropdown.Toggle>
                            d                            <Dropdown.Menu className="border-0" style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                                <Dropdown.Item onClick={logout} >
                                    Disconnect Wallet
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


                    </div>

                </div>
            </div>
        </Container>
    );
};

export default SidebarHeader;
