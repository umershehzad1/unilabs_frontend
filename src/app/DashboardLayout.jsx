// DashboardLayout.js
"use client";
import { AuthProvider } from '@/utils/AuthContext';
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import SidebarHeader from '../sidebar/SidebarHeader';
import OffCanvas from '../sidebar/OffCanvas';

const DashboardLayout = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <AuthProvider>
            <div className="d-flex flex-column" style={{ height: '100vh', overflow: "hidden" }}>
                <div className="d-lg-flex">
                    <div className="d-none d-lg-block primary-border-right" style={{ height: '100vh', width: '250px' }}>
                        <Sidebar />
                    </div>
                    <div className="d-flex flex-column" style={{ flex: 1 }}>
                        <div className='primary-border'>
                            <SidebarHeader onLogoClick={() => setShowSidebar(true)} />
                        </div>
                        <div style={{  overflowY: 'auto',height:"90vh" }}>
                            {children}
                        </div>
                    </div>
                </div>
                <OffCanvas showSidebar={showSidebar} handleCloseSidebar={() => setShowSidebar(false)} />
            </div>
        </AuthProvider>
    );
};

export default DashboardLayout;
