import {Avatar, Box, Flex, Icon, IconButton, Link, Text} from "@chakra-ui/react";
import {LuArrowUpRight, LuMenu} from "react-icons/lu";
import qpImage from "../../assets/qp.jpg";

function NavBar() {
    // const {_, onToggle} = useDisclosure();
    return (
        <Box
            width="100%"
            position="sticky"
            display="flex"
            justifyContent="center"
            padding={4}
            top="0"
            zIndex="10"
            bg={"whiteAlpha.100"}
        >
            {/* Border Body */}
            <Box
                padding={3}
                borderWidth="1px"
                borderRadius="30px"
                borderColor="gray.300"
                bg={"whiteAlpha.900"}
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
                        <Link _focus={{outline: 'none', boxShadow: 'none'}} href="/" _hover={{textDecoration: "none"}}>
                            <Avatar.Root>
                                <Avatar.Fallback name="Godsend Joseph"/>
                                <Avatar.Image src={qpImage}/>
                            </Avatar.Root>
                            <Text fontWeight="semibold">godsend.</Text>
                        </Link>
                    </Flex>

                    <IconButton
                        aria-label="Menu"
                        variant="ghost"
                        _hover={{bg: "transparent"}}
                        _active={{bg: "transparent"}}
                        display={{base: "flex", md: "none"}}
                        // onClick={onToggle}
                    >
                        <LuMenu size={24} color="gray.500"/>
                    </IconButton>

                    {/* Row for Nav */}
                    <Flex display={{base: "none", md: "flex"}} direction="row" align="center" gap="3" paddingRight="3">
                        <Link _focus={{outline: 'none', boxShadow: 'none'}} href="/files/Godsend_J_CV.pdf"
                              download={true} target="_blank">
                            <Flex direction="row" align="center" gap="0.2">
                                <Text>Resume</Text>
                                <Icon>
                                    <LuArrowUpRight/>
                                </Icon>
                            </Flex>
                        </Link>

                        <Link _focus={{outline: 'none', boxShadow: 'none'}} href="/projects">
                            <Flex direction="row" align="center" gap="0.2">
                                <Text>Projects</Text>
                                <Icon>
                                    <LuArrowUpRight/>
                                </Icon>
                            </Flex>
                        </Link>

                        <Link _focus={{outline: 'none', boxShadow: 'none'}} href="/papers">
                            <Flex direction="row" align="center" gap="0.2">
                                <Text>Papers</Text>
                                <Icon>
                                    <LuArrowUpRight/>
                                </Icon>
                            </Flex>
                        </Link>

                        {/*<Link href="/blog">*/}
                        {/*  <Flex direction="row" align="center" gap="0.2">*/}
                        {/*    <Text>Blog</Text>*/}
                        {/*    <Icon>*/}
                        {/*      <LuArrowUpRight />*/}
                        {/*    </Icon>*/}
                        {/*  </Flex>*/}
                        {/*</Link>*/}
                    </Flex>
                    {/* End Row for Nav */}
                </Flex>
            </Box>
        </Box>
    );
}

export default NavBar;
