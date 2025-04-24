import { Avatar, Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { LuArrowUpRight } from "react-icons/lu";

function NavBar() {
    return (
        <Box width="100%" display="flex" justifyContent="center" padding={4}>
        {/* Border Body */}
        <Box
          padding={3}
          borderWidth="1px"
          borderRadius="30px"
          borderColor="gray.300"
          width="50%"
        >
          {/* Row for Header */}
          <Flex
            direction="row"
            justifyContent="space-between"
            maxWidth="1200px"
            align="center"
          >
            {/* Row for Avatar */}
            <Flex direction="row" align="center" gap="2">
              <Avatar.Root>
                <Avatar.Fallback name="Godsend Joseph" />
                <Avatar.Image src="../assets/qp.jpg" />
              </Avatar.Root>
              <Text fontWeight="semibold">godsend.</Text>
            </Flex>

            {/* Row for Nav */}
            <Flex direction="row" align="center" gap="3" paddingRight="3">
              <Link href="#" download={false}>
                <Flex direction="row" align="center" gap="0.2">
                  <Text>Resume</Text>
                  <Icon>
                    <LuArrowUpRight />
                  </Icon>
                </Flex>
              </Link>

              <Link href="/gallery">
                <Flex direction="row" align="center" gap="0.2">
                  <Text>Gallery</Text>
                  <Icon>
                    <LuArrowUpRight />
                  </Icon>
                </Flex>
              </Link>

              <Link href="/blog">
                <Flex direction="row" align="center" gap="0.2">
                  <Text>Blog</Text>
                  <Icon>
                    <LuArrowUpRight />
                  </Icon>
                </Flex>
              </Link>
            </Flex>
            {/* End Row for Nav */}
          </Flex>
        </Box>
      </Box>
    )
}

export default NavBar