import Footer from "@/components/home_components/Footer";
import NavBar from "@/components/home_components/NavBar";
import { Outlet } from "react-router";

function HomeLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default HomeLayout;
