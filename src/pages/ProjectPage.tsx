import {Flex, Text, Image, Box, Badge, List, Button, Icon} from "@chakra-ui/react";
import {useState, useEffect} from "react";
import {LuCircleCheck} from "react-icons/lu"

interface ProjectLink {
    github: string;
    live_demo: string;
    video_demo?: string;
}

interface ProjectDetails {
    id: number;
    title: string;
    slug: string;
    description: string;
    tech_stack: string[];
    role: string;
    features: string[];
    challenges_and_learnings: string;
    links: ProjectLink;
    thumbnail: string;
    screenshots: string[];
    tags: string[];
}


function ProjectPage() {
    const [projectDetails, setProjectDetails] = useState<ProjectDetails[]>([])
    useEffect(() => {
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched data:", data);
                setProjectDetails(data);
            })
            .catch((error) => console.error(error));
    }, []);
    return (
        <>

            <Flex direction="column"
                  justifyContent="center"
                  alignItems="center">
                <Text>
                    Personal Projects
                </Text>
                <Text px={{  base: 20, md: 0}} textAlign="center" fontSize="sm" fontStyle="italic">
                    This is still an experimental website and not all my projects are listed here.
                </Text>

                <Box width="100%" paddingRight={16} paddingLeft={16} alignItems="center">
                    {projectDetails.map((project) => (
                        <Box padding={10}>
                            <Flex direction={{ base: "column", md: "row" }} alignItems="top">
                                <Image
                                    objectFit="cover"
                                    maxW="200px"
                                    src={project.thumbnail}
                                    alt={project.title}
                                />

                                <Box ml={{ base: 0, md: 5 }}>
                                    <Flex direction="column">
                                        <Text fontSize="2xl" fontWeight="bold">
                                            {project.title}
                                        </Text>

                                        <Flex wrap={{ base: "wrap", md: "nowrap" }} gap={2} direction="row">
                                            {project.tech_stack.map((techS) => (
                                                <Badge mr={2} padding={2}>{techS}</Badge>
                                            ))}
                                        </Flex>

                                        <Text mt={2}>{project.description}</Text>

                                        <Text mt={2} fontWeight="bold">Features:</Text>
                                        <List.Root gap="2" variant="plain" align="center">
                                            {project.features.map((feature) => (
                                                <List.Item>
                                                    <Icon
                                                        as={LuCircleCheck}
                                                        boxSize={[4, 4]}  // ✅ TypeScript friendly
                                                    />
                                                    <Box mr={2}></Box>
                                                    <Text fontSize={{ base: "sm", md: "md" }}>{feature}</Text>
                                                </List.Item>
                                            ))}
                                        </List.Root>

                                        <Button width={{  base: "100%", md: "30%"}} mt={2} as="a" href={project.links.live_demo} target="_blank"
                                        >Live View</Button>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </Box>
            </Flex>
        </>
    )
}

export default ProjectPage