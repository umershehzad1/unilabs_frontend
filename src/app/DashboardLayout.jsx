"use client";
import ConnectBtn from '@/components/shared/ConnectBtn';
import { AuthVerify } from '@/utils/auth.utils';
import { AuthProvider } from '@/utils/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import OffCanvas from '../sidebar/OffCanvas';
import Sidebar from '../sidebar/Sidebar';
import SidebarHeader from '../sidebar/SidebarHeader';

const DashboardLayout = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const { isConnected } = useAccount();
    const user = AuthVerify();
    const router = useRouter()
    useEffect(() => {
        if (!user) {
            router.back()
        }
    }, [user]);

    return (
        <AuthProvider>
            <div className="d-flex flex-column" style={{ height: '100vh', overflow: "hidden" }}>
                <div className="d-lg-flex">
                    <div className="d-none d-lg-block primary-border-right" style={{ height: '100vh', width: '250px' }}>
                        <Sidebar />
                    </div>

                    <div className="d-flex flex-column" style={{ flex: 1 }}>
                        <div className="primary-border">
                            <SidebarHeader onLogoClick={() => setShowSidebar(true)} />
                        </div>

                        {isConnected ? (
                            <div style={{ overflowY: 'auto', height: "90vh" }}>
                                {children}
                            </div>
                        ) : (
                            <div className="d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 64px)' }}>
                                <ConnectBtn />
                            </div>
                        )}
                    </div>
                </div>

                <OffCanvas showSidebar={showSidebar} handleCloseSidebar={() => setShowSidebar(false)} />
            </div>
        </AuthProvider>
    );
};

export default DashboardLayout;
