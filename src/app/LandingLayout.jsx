import NavigationBar from '@/components/layouts/NavigationBar';
import Footer from '@/components/layouts/Footer';
import { usePathname } from 'next/navigation';

const LandingLayout = ({ children }) => {
    const pathname = usePathname();
    const headingText = `Join the Unilabs | $5 million in prizes & seed funding | Jump in, the water's just fine ->`;
    return (
        <>
            {/* {pathname === "/login" || pathname==="/signup" ? ( */}
            {/* <main>{children}</main> */}
            {/* ) : ( */}
            <>
                <div
                    style={{
                        background: "linear-gradient(to right, #4CAF50, #0F9CC9, #145093)"
                    }}
                    className='p-1 d-lg-block d-none'>
                    <p
                        className='mb-0 text-center color-black'>
                        ${headingText}
                    </p>
                </div>

                <NavigationBar />
                <main className='overflow-x-hidden'>{children}</main>
                <Footer />
                <div

                    style={{
                        background: "linear-gradient(to right, #4CAF50, #0F9CC9, #145093)"
                    }}
                    className='p-1 d-lg-none d-black'>
                    <p

                        className='mb-0 text-center color-black'>
                        ${headingText}
                    </p>
                </div>

            </>
            {/* )} */}
        </>
    );
};

export default LandingLayout;
