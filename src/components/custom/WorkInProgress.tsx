import {Flex, Box, Image, Text} from "@chakra-ui/react";

function WorkInProgress() {
    return (
        <>
            <Flex
                minH="50vh"
                justifyContent="center"
                alignItems="center"
            >
                <Box p={8}>
                    <Image height="500px" src="/dev/maintenance_1.gif" alt="Work in progress" />
                    <Text fontSize="xl" textAlign="center">
                        Currently under maintenance. Please check back later.
                    </Text>
                </Box>
            </Flex>
        </>
    )
}

export default WorkInProgress