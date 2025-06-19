import NavBar from "@/components/home_components/NavBar";
import {Outlet} from "react-router-dom";
import Footer from "@/components/home_components/Footer.tsx";

function Layout() {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;
