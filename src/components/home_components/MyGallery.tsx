import { useEffect, useState } from "react";
import { Box, Flex, Grid, Image } from "@chakra-ui/react";

interface Image {
  id: number;
  image: string;
}

function MyGallery() {
  const [images, setImages] = useState<Image[]>([]);

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

  const getRandomImages = (imageArray: Image[], count: number): Image[] => {
    const shuffled = [...imageArray];

    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, Math.min(count, shuffled.length));
  };

  return (
    <>
      <Flex
        width="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="70%" paddingTop={10} alignItems="center">
          <Grid templateColumns="repeat(3, 1fr)" gap={3}>
            {images.map((image) => (
              <Image
                key={image.id}
                src={`/images/${image.image}`}
                alt={image.image}
                fit="cover"
                rounded="lg"
                w="600px"
                h="400px"
              />
            ))}
          </Grid>
        </Box>
      </Flex>
    </>
  );
}

export default MyGallery;
