import {Flex, Text, Box} from "@chakra-ui/react";
import {useState, useEffect} from "react";
import {ProjectDetails} from "@/data/models.ts";
import ProjectTile from "@/components/custom/ProjectTile.tsx";

function ProjectScreen() {
    const [projectDetails, setProjectDetails] = useState<ProjectDetails[]>([])
    const timestamp = new Date().getTime();
    useEffect(() => {
        fetch(`/projects.json?v=${timestamp}`)
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
                <Text px={{  base: 20, md: 0}} textAlign="center" fontSize="sm" fontStyle="italic">
                    This list will be updated soon
                </Text>

                <Box width="100%" paddingRight={{ base: 0, md: 16 }} paddingLeft={{ base: 0, md: 16 }} alignItems="center">
                    {projectDetails.map((project) => (
                        <ProjectTile
                            key={project.id}
                            {...project}
                        />
                    ))}
                </Box>
            </Flex>
        </>
    )
}

export default ProjectScreen