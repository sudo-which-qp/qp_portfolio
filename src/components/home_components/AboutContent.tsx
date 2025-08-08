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
                        Hi, I’m Godsend Joseph. Full Stack Developer & MSc Advanced Computer Science Student
                        I design and build secure, scalable web and mobile applications using Flutter, Laravel, Golang,
                        and React. Over the past 4+ years, I’ve delivered fintech platforms, event management systems,
                        and crypto payment solutions combining technical precision with user-focused design.
                    </Text>
                    <Text mt={6} px={4} fontFamily="roboto" textStyle={{base: "xl", md: "2xl", lg: "4xl"}} textAlign="center">
                        Currently pursuing my MSc at Cardiff Metropolitan University, I’m exploring systems security,
                        cloud-based architectures, and cutting-edge development practices. My goal is to create software
                        that solves real-world problems and stands the test of scale and security.
                    </Text>
                    <Text mt={6} px={4} fontFamily="roboto" textStyle={{base: "xl", md: "2xl", lg: "4xl"}} textAlign="center">
                        When I’m not coding, you’ll find me reading, gaming, exploring photography, or learning
                        something new.
                    </Text>
                </Box>
            </Flex>
        </>
    );
}

export default AboutContent;
