import { Avatar, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router";
import qpImage from "../../assets/qp.jpg";

const navItems = [
	{ label: "Home", to: "/", end: true },
	{ label: "Blog", to: "/blog", end: false },
	{ label: "Papers", to: "/papers", end: false },
];

function NavBar() {
	return (
		<Flex
			as="header"
			justifyContent="space-between"
			alignItems="center"
			py={{ base: 6, md: 10 }}
		>
			<Link asChild _hover={{ textDecoration: "none" }} outline="none">
				<NavLink to="/">
					<HStack gap={3}>
						<Avatar.Root size="md">
							<Avatar.Fallback name="Godsend Joseph" />
							<Avatar.Image src={qpImage} />
						</Avatar.Root>
						<Text fontFamily="heading" fontSize="3xl">
							godsend.
						</Text>
					</HStack>
				</NavLink>
			</Link>

			<HStack as="nav" gap={{ base: 4, md: 6 }}>
				{navItems.map((item) => (
					<NavLink key={item.to} to={item.to} end={item.end}>
						{({ isActive }) => (
							<Text
								color={isActive ? "ink" : "muted"}
								_hover={{ color: "ink" }}
								transition="color 0.2s"
							>
								{item.label}
							</Text>
						)}
					</NavLink>
				))}
			</HStack>
		</Flex>
	);
}

export default NavBar;
