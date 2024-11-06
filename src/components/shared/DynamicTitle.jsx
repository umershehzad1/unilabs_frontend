"use client";

import { usePathname } from 'next/navigation';
const DynamicTitle = () => {
    const topic = usePathname().split('/').filter(Boolean).join(' | ');
    return (
        <>
            <head>
                <title >{topic ? `UNILabs | ${topic}` : 'UNILabs'}</title>
            </head>
        </>
    );
};
export default DynamicTitle;
