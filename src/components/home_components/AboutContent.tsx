import {Box, Flex, Text} from "@chakra-ui/react";

function AboutContent() {
    return (
        <>
            <Flex
                width="100%"
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Box width="90%" paddingTop={{base: 1, md: 8}} alignItems="center">
                    <Text px={4} fontFamily="roboto" textStyle={{base: "xl", md: "2xl", lg: "4xl"}} textAlign="center">
                        I’m Godsend, a passionate Full Stack Developer who loves building cross-platform apps and
                        crafting seamless user experiences. Always learning. Always creating.
                    </Text>
                </Box>
            </Flex>
        </>
    );
}

export default AboutContent;
