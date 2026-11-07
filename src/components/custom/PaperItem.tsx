import { Box, Text } from "@chakra-ui/react";
import type { Paper } from "@/data/models";

interface PaperItemProps {
	paper: Paper;
	compact?: boolean;
}

function PaperItem({ paper, compact = false }: PaperItemProps) {
	const isReading = paper.status === "reading";
	const citation = `${paper.authors} · ${paper.venue} ${paper.year}`;

	if (compact) {
		return (
			<Box py={3}>
				<Text fontSize="lg">{paper.title}</Text>
				<Text color="muted" fontSize="sm">
					{citation}
				</Text>
			</Box>
		);
	}

	return (
		<Box py={6} borderTopWidth="1px" borderColor="line">
			<Text fontSize="sm" color="muted">
				<Text as="span" color={isReading ? "accent" : "muted"}>
					●
				</Text>{" "}
				{isReading ? "Reading" : "Finished"} · {paper.topic}
			</Text>
			<Text as="h3" fontFamily="heading" fontSize="2xl" mt={1}>
				{paper.title}
			</Text>
			<Text color="muted" mt={1}>
				{citation}
			</Text>
			{paper.note && (
				<Text fontStyle="italic" mt={2}>
					{paper.note}
				</Text>
			)}
		</Box>
	);
}

export default PaperItem;
