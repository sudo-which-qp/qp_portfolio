import {Box, Flex, Icon, Link, Text} from "@chakra-ui/react";
import {
    LuFacebook,
    LuGithub,
    LuInstagram,
    LuLinkedin,
    LuX,
} from "react-icons/lu";

function Footer() {
    return (
        <>


            <Flex width="100%" direction="column" justifyContent="center"
                  alignItems="center"
                  mb={5}>
                <Text fontWeight="bold" textStyle="lg" textAlign="center" mr={5}>
                    Contact me:
                </Text>

                <Link _focus={{outline: 'none', boxShadow: 'none'}}
                      href="mailto:hello@godsendjoseph.org" textStyle="lg" textAlign="center" mr={5}>
                    hello@godsendjoseph.org
                </Link>
                <Link _focus={{outline: 'none', boxShadow: 'none'}} href="mailto:godsendjoseph@gmail.com" textStyle="lg"
                      textAlign="center" mr={5}>
                    godsendjoseph@gmail.com
                </Link>
            </Flex>
            <Flex
                width="100%"
                direction="row"
                justifyContent="center"
                alignItems="center"
                mb={5}
            >

                <Flex direction="row" align="center">
                    <Text fontWeight="bold" textStyle="lg" textAlign="center" mr={5}>
                        Follow me:
                    </Text>

                    <Flex direction={"row"} justifyContent={"space-evenly"} gap={2}>
                        <Link href="https://github.com/sudo-which-qp" target="_blank">
                            <Box bg={"gray.100"} borderRadius="5px" p={2}>
                                <Icon as={LuGithub} boxSize={5}/>
                            </Box>
                        </Link>

                        <Link href="https://x.com/godsend_joseph" target="_blank">
                            <Box bg={"gray.100"} borderRadius="5px" p={2}>
                                <Icon as={LuX} boxSize={5}/>
                            </Box>
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/godsend-joseph-80a6ab188/"
                            target="_blank"
                        >
                            <Box bg={"gray.100"} borderRadius="5px" p={2}>
                                <Icon as={LuLinkedin} boxSize={5}/>
                            </Box>
                        </Link>

                        <Link
                            href="https://www.instagram.com/sudo_which_qp/"
                            target="_blank"
                        >
                            <Box bg={"gray.100"} borderRadius="5px" p={2}>
                                <Icon as={LuInstagram} boxSize={5}/>
                            </Box>
                        </Link>

                        <Link
                            href="https://www.facebook.com/bobby.joseph.108"
                            target="_blank"
                        >
                            <Box bg={"gray.100"} borderRadius="5px" p={2}>
                                <Icon as={LuFacebook} boxSize={5}/>
                            </Box>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            <Text mb={10} fontSize="sm" textAlign="center">
                &copy; {new Date().getFullYear()} Godsend Joseph. All rights reserved.
            </Text>
        </>
    );
}

export default Footer;
