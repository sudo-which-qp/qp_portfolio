import NavBar from "@/components/home_components/NavBar";
import { Box, Flex, Text } from "@chakra-ui/react";

function HomePage() {
  return (
    <>
      <NavBar />

      <Flex
        width="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="50%" paddingTop={10} alignItems="center">
          <Text hyphens="auto" textStyle="3xl" textAlign="justify">
            As a Full Stack Developer, I have been creating cross-platform
            mobile applications for Android and iOS using Flutter, a technology
            that I am proficient in and passionate about. I have also been
            involved in designing and implementing robust APIs and web backends
            using PHP Laravel
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default HomePage;
