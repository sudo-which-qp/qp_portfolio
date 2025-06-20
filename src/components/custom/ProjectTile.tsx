import {Box, Flex, Image, Text, Badge, List, Link, Button, Icon} from "@chakra-ui/react";
import {ProjectDetails} from "@/data/models.ts";
import {LuCircleCheck} from "react-icons/lu";

function ProjectTile(props: ProjectDetails) {
    return (
        <>
            <Box padding={10}>
                <Flex direction={{ base: "column", md: "row" }} alignItems="top">
                    <Flex justifyContent={{ base: "center", md: "flex-start"}}>
                        <Image
                            objectFit="cover"
                            maxW="200px"
                            src={props.thumbnail}
                            alt={props.title}
                        />
                    </Flex>

                    <Box ml={{ base: 0, md: 5 }}>
                        <Flex direction="column">
                            <Flex alignItems={{ base: "bottom", md: "center"}}>
                                <Text mt={{ base: 3, md: 0 }} fontSize="2xl" fontWeight="bold">
                                    {props.title}
                                </Text>
                                <Box padding={5}>
                                    <Badge ml={2} fontSize={"xs"}>{props.type}</Badge>
                                </Box>
                            </Flex>

                            <Flex mt={{ base: 1, md: 0 }} wrap={{ base: "wrap", md: "nowrap" }} gap={2} direction="row">
                                {props.tech_stack.map((techS) => (
                                    <Badge mr={2} padding={2}>{techS}</Badge>
                                ))}
                            </Flex>

                            <Text mt={{ base: 5, md: 4 }}>{props.description}</Text>

                            <Text mt={2} fontWeight="bold">Features:</Text>
                            <List.Root gap="2" variant="plain" align="center">
                                {props.features.map((feature) => (
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

                            <Link href={props.links.live_demo} target="_blank">
                                <Button width={{ base: "100%", md: "30%" }} mt={2}>
                                    Live View
                                </Button>
                            </Link>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default ProjectTile;