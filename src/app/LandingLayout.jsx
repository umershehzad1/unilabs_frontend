import NavigationBar from '@/components/layouts/NavigationBar';
import Footer from '@/components/layouts/Footer';

const LandingLayout = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default LandingLayout;
