import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router";

interface SectionHeaderProps {
	title: string;
	linkLabel: string;
	to: string;
}

function SectionHeader({ title, linkLabel, to }: SectionHeaderProps) {
	return (
		<Flex justifyContent="space-between" alignItems="baseline" mb={4}>
			<Heading as="h2" fontSize="4xl">
				{title}
			</Heading>
			<Link
				asChild
				color="muted"
				textDecoration="underline"
				textUnderlineOffset="4px"
			>
				<RouterLink to={to}>{linkLabel}</RouterLink>
			</Link>
		</Flex>
	);
}

interface HomeSectionProps extends SectionHeaderProps {
	children: ReactNode;
}

export function HomeSection({ children, ...header }: HomeSectionProps) {
	return (
		<Box flex="1">
			<SectionHeader {...header} />
			{children}
		</Box>
	);
}
