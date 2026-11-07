import { Box, Text } from "@chakra-ui/react";

function Footer() {
	return (
		<Box as="footer" borderTopWidth="1px" borderColor="line" mt={20} py={8}>
			<Text fontSize="sm" color="muted">
				© {new Date().getFullYear()} Godsend Joseph. All rights reserved.
			</Text>
		</Box>
	);
}

export default Footer;
