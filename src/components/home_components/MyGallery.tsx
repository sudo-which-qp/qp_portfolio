import { Box, Grid, Image } from "@chakra-ui/react";
import { useMemo } from "react";
import { useJson } from "@/utils/useJson";

interface GalleryImage {
	id: number;
	image: string;
}

const GALLERY_COUNT = 6;

function MyGallery() {
	const allImages = useJson<GalleryImage>("/image_repo.json");

	const images = useMemo(() => {
		const shuffled = [...allImages];

		// Fisher-Yates shuffle algorithm
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}

		return shuffled.slice(0, GALLERY_COUNT);
	}, [allImages]);

	return (
		<Box mt={{ base: 10, md: 16 }}>
			<Grid
				templateColumns={{
					base: "repeat(2, 1fr)",
					md: "repeat(3, 1fr)",
					lg: "repeat(6, 1fr)",
				}}
				gap={3}
			>
				{images.map((image) => (
					<Image
						key={image.id}
						src={`/images/gallery/${image.image}`}
						alt={image.image}
						objectFit="cover"
						rounded="lg"
						w="100%"
						aspectRatio={1}
					/>
				))}
			</Grid>
		</Box>
	);
}

export default MyGallery;
