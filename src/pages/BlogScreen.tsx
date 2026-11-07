import { Heading, Text } from "@chakra-ui/react";
import { pageMeta } from "@/utils/seo";

export const meta = () =>
	pageMeta({
		title: "Blog | Godsend Joseph",
		description:
			"Notes on research, systems, making things, and the road into BioTech.",
	});

function BlogScreen() {
	return (
		<>
			<Heading as="h1" fontSize="5xl" mt={{ base: 6, md: 10 }}>
				Blog
			</Heading>
			<Text color="muted" fontSize="xl" mt={3}>
				Notes on research, systems, making things, and the road into BioTech.
			</Text>
			<Text mt={10} fontSize="lg">
				Coming soon.
			</Text>
		</>
	);
}

export default BlogScreen;
