// ClientWrapper.js
"use client"; // Mark as a client component

import React, { useEffect, useState } from 'react';
import DynamicTitle from '@/components/DynamicTitle';
import ContextProvider from '../../context';
import DashboardLayout from './DashboardLayout';
import LandingLayout from './LandingLayout';
import { usePathname } from 'next/navigation';

export default function ClientWrapper({ children }) {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);
    const isDashboard = pathname?.startsWith('/dashboard');

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div>Loading...</div>;
    }

    const Layout = isDashboard ? DashboardLayout : LandingLayout;

    return (
        <ContextProvider>
            <DynamicTitle />
            <Layout>{children}</Layout>
        </ContextProvider>
    );
}
