import {useEffect, useState} from "react";
import {Box, Flex, Grid, Image, Link, Text, useBreakpointValue} from "@chakra-ui/react";

interface GalleryImage {
    id: number;
    image: string;
}

function MyGallery() {
    const [images, setImages] = useState<GalleryImage[]>([]);

    useEffect(() => {
        fetch("/image_repo.json")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched data:", data);
                const randomImages = getRandomImages(data, 6);
                setImages(randomImages);
            })
            .catch((error) => console.error(error));
    }, []);

    const getRandomImages =
        (imageArray: GalleryImage[], count: number):
            GalleryImage[] => {
            const shuffled = [...imageArray];

            // Fisher-Yates shuffle algorithm
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }

            return shuffled.slice(0, Math.min(count, shuffled.length));
        };

    const maxImages = useBreakpointValue({ base: 2, md: images.length }) || images.length;
    const displayedImages = images.slice(0, maxImages);

    return (
        <>
            <Flex
                width="100%"
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Box width="70%" paddingTop={10} alignItems="center">
                    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={3}>
                        {displayedImages.map((image) => (
                            <Image
                                key={image.id}
                                src={`/images/gallery/${image.image}`}
                                alt={image.image}
                                fit="cover"
                                rounded="lg"
                                w="100%"
                                h="400px"
                            />
                        ))}
                    </Grid>
                </Box>
            </Flex>

            <Flex
                width="100%"
                direction="column"
                justifyContent="center"
                alignItems="center"
                mb={10}
            >
                <Box width="70%" paddingTop={10} alignItems="center">
                    <Text textStyle="2xl" textAlign="left">
                        Recently have been working a side project on my free time, can't show what it is yet, but it
                        will be something cool.
                    </Text>

                    <Link href="/projects">
                        <Text
                            mt={5}
                            textStyle="4xl"
                            textAlign="left"
                            textDecoration="underline"
                        >
                            View my projects
                        </Text>
                    </Link>
                </Box>
            </Flex>
        </>
    );
}

export default MyGallery;
