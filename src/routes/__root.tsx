import {Outlet, createRootRoute} from '@tanstack/react-router'
import NavBar from "@/components/home_components/NavBar.tsx";
import Footer from "@/components/home_components/Footer.tsx";
import App from "@/App.tsx";

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <App>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </App>
    )
}
