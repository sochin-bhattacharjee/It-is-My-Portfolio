import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className='flex-grow'>
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;