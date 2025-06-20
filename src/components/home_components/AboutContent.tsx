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
                        Hi, I'm Godsend Joseph, a passionate and curious software engineer with hands-on experience in
                        building web and mobile applications. I'm always exploring new technologies, solving real-world
                        problems, and sharing what I learn. Currently pursuing my Master’s in Advanced Computer Science
                        at Cardiff Metropolitan University, UK. Outside of tech, I enjoy reading, gaming, photography,
                        and discovering new ways to grow.
                    </Text>
                </Box>
            </Flex>
        </>
    );
}

export default AboutContent;
