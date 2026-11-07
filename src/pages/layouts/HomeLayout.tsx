import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Footer from "@/components/home_components/Footer";
import NavBar from "@/components/home_components/NavBar";

function HomeLayout() {
	return (
		<Box
			maxW="1100px"
			mx="auto"
			px={{ base: 5, md: 8 }}
			minH="100vh"
			display="flex"
			flexDirection="column"
		>
			<NavBar />
			<Box as="main" flex="1">
				<Outlet />
			</Box>
			<Footer />
		</Box>
	);
}

export default HomeLayout;
