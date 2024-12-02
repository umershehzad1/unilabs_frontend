import NavigationBar from '@/components/layouts/NavigationBar';
import Footer from '@/components/layouts/Footer';
import { usePathname } from 'next/navigation';

const LandingLayout = ({ children }) => {
    const pathname = usePathname();

    return (
        <>
            {/* {pathname === "/login" || pathname==="/signup" ? ( */}
                {/* <main>{children}</main> */}
            {/* ) : ( */}
                <>
                    <NavigationBar />
                    <main className='overflow-x-hidden'>{children}</main>
                    {/* <Footer /> */}
                </>
            {/* )} */}
        </>
    );
};

export default LandingLayout;
