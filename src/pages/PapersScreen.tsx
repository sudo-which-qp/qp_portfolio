import { Box, Button, Grid, Heading, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import PaperItem from "@/components/custom/PaperItem";
import type { Paper } from "@/data/models";
import { pageMeta } from "@/utils/seo";
import { useJson } from "@/utils/useJson";

export const meta = () =>
	pageMeta({
		title: "Reading list | Godsend Joseph",
		description: "Papers on my desk and the ones I've finished.",
	});

type Filter = "all" | Paper["status"];

const filters: { label: string; value: Filter }[] = [
	{ label: "All", value: "all" },
	{ label: "Reading", value: "reading" },
	{ label: "Finished", value: "finished" },
];

function PapersScreen() {
	const papers = useJson<Paper>("/papers.json");
	const [filter, setFilter] = useState<Filter>("all");

	const countFor = (value: Filter) =>
		value === "all"
			? papers.length
			: papers.filter((paper) => paper.status === value).length;

	const visible =
		filter === "all"
			? papers
			: papers.filter((paper) => paper.status === filter);

	return (
		<>
			<Heading as="h1" fontSize="5xl" mt={{ base: 6, md: 10 }}>
				Reading list
			</Heading>
			<Text color="muted" fontSize="xl" mt={3}>
				Papers on my desk and the ones I've finished.
			</Text>

			<HStack mt={10} gap={2}>
				{filters.map((item) => {
					const isActive = filter === item.value;
					return (
						<Button
							key={item.value}
							onClick={() => setFilter(item.value)}
							rounded="full"
							size="md"
							variant="plain"
							px={4}
							bg={isActive ? "ink" : "transparent"}
							color={isActive ? "paper" : "muted"}
							_hover={{ color: isActive ? "paper" : "ink" }}
						>
							{item.label}{" "}
							<Text as="span" opacity={0.6}>
								{countFor(item.value)}
							</Text>
						</Button>
					);
				})}
			</HStack>

			<Box mt={10}>
				{visible.length === 0 && <Text color="muted">Nothing yet.</Text>}
				<Grid
					templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
					columnGap={{ base: 0, md: 20 }}
				>
					{visible.map((paper) => (
						<PaperItem key={paper.id} paper={paper} />
					))}
				</Grid>
			</Box>
		</>
	);
}

export default PapersScreen;
