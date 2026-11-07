import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import type { PathStep } from "@/data/models";
import { useJson } from "@/utils/useJson";

const tags = [
	"Research",
	"System design",
	"Frontend & backend",
	"3D modelling",
	"3D printing",
	"BioTech",
];

function AboutContent() {
	const steps = useJson<PathStep>("/path.json");

	return (
		<Flex
			direction={{ base: "column", lg: "row" }}
			justifyContent="space-between"
			gap={{ base: 10, lg: 16 }}
		>
			<Box maxW="3xl">
				<Text
					fontSize={{ base: "xl", md: "2xl" }}
					lineHeight="1.5"
					fontWeight="500"
				>
					I'm Godsend, a full-stack engineer who loves research, system design,
					and making physical things with 3D modelling and printing. I'm heading
					toward{" "}
					<Text as="span" color="accent">
						BioTech
					</Text>{" "}
					— building at the intersection of software, hardware and health.
				</Text>

				<HStack mt={6} gap={2} wrap="wrap">
					{tags.map((tag) => (
						<Text
							key={tag}
							fontSize="sm"
							borderWidth="1px"
							borderColor="line"
							rounded="full"
							px={4}
							py={1.5}
						>
							{tag}
						</Text>
					))}
				</HStack>
			</Box>

			<Box
				minW={{ lg: "340px" }}
				borderLeftWidth={{ base: 0, lg: "1px" }}
				borderColor="line"
				pl={{ base: 0, lg: 8 }}
			>
				<Text fontSize="xs" letterSpacing="wider" color="muted" mb={2}>
					THE PATH
				</Text>
				{steps.map((step) => (
					<Flex
						key={step.id}
						justifyContent="space-between"
						alignItems="baseline"
						gap={4}
						py={3}
						borderBottomWidth="1px"
						borderColor="line"
					>
						<Text fontSize="lg">{step.title}</Text>
						<Text fontSize="xs" letterSpacing="wider" color="muted">
							{step.status.toUpperCase()}
						</Text>
					</Flex>
				))}
			</Box>
		</Flex>
	);
}

export default AboutContent;
