import { Box, Flex, Text } from "@chakra-ui/react";

function AboutContent() {
  return (
    <>
      <Flex
        width="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="90%" paddingTop={10} alignItems="center">
          <Text textStyle="4xl" textAlign="justify">
            Hi there, so who is Godsend Joseph? Well I am an experience software
            engineer with a passion for learning and sharing knowledge. I have
            worked on a wide range of projects, from web applications to mobile
            apps. I am always looking for new challenges and opportunities to
            learn and grow. I am currently on my Masters Degree in Advanced
            Computer Science at the Cardiff Metropolitan University, Wales UK.
            In my free time, I enjoy learning new things, reading, playing video
            games and taking photos.
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default AboutContent;
