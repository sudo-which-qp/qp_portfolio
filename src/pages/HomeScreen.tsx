import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import PaperItem from "@/components/custom/PaperItem";
import AboutContent from "@/components/home_components/AboutContent";
import { HomeSection } from "@/components/home_components/HomeSection";
import MyGallery from "@/components/home_components/MyGallery";
import type { Paper } from "@/data/models";
import { pageMeta } from "@/utils/seo";
import { useJson } from "@/utils/useJson";

export const meta = () =>
	pageMeta({
		title: "Godsend Joseph",
		description:
			"Godsend Joseph is a full-stack engineer heading toward BioTech, building Vusion Labs.",
		image: "https://godsendjoseph.dev/og-image.jpg",
		url: "https://godsendjoseph.dev",
		type: "website",
	});

const emails = ["godsend.joseph@vusionlabs.org", "godsendjoseph@gmail.com"];

function HomeScreen() {
	const papers = useJson<Paper>("/papers.json");
	const reading = papers.filter((paper) => paper.status === "reading");

	return (
		<>
			<AboutContent />
			<MyGallery />

			<Text mt={{ base: 10, md: 16 }} maxW="2xl" fontSize="lg" lineHeight="1.6">
				For the past year I've been researching what needs to be solved and
				built, and that led me to build{" "}
				<Link
					href="https://vusionlabs.org/"
					target="_blank"
					textDecoration="underline"
					textUnderlineOffset="4px"
				>
					Vusion Labs
				</Link>
				.
			</Text>

			<Flex
				mt={{ base: 12, md: 20 }}
				gap={{ base: 12, md: 16 }}
				direction={{ base: "column", md: "row" }}
			>
				<HomeSection title="Writing" linkLabel="All posts" to="/blog">
					<Text color="muted">Coming soon.</Text>
				</HomeSection>

				<HomeSection
					title="Currently reading"
					linkLabel="All papers"
					to="/papers"
				>
					{reading.length === 0 && <Text color="muted">Nothing yet.</Text>}
					{reading.map((paper) => (
						<PaperItem key={paper.id} paper={paper} compact />
					))}
				</HomeSection>
			</Flex>

			<Box mt={{ base: 12, md: 20 }}>
				<Text color="muted">Contact me</Text>
				<HStack mt={2} gap={5} wrap="wrap">
					{emails.map((email) => (
						<Link
							key={email}
							href={`mailto:${email}`}
							textDecoration="underline"
							textUnderlineOffset="4px"
						>
							{email}
						</Link>
					))}
				</HStack>
			</Box>
		</>
	);
}

export default HomeScreen;
