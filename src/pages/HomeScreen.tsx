import AboutContent from "@/components/home_components/AboutContent";
import MyGallery from "@/components/home_components/MyGallery";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Godsend Joseph — Full Stack Developer" },
    {
      name: "description",
      content:
        "Godsend Joseph is a Full Stack Developer building cross-platform apps and Vusion Labs, a product company.",
    },
    { property: "og:title", content: "Godsend Joseph — Full Stack Developer" },
    { property: "og:description", content: "Full Stack Developer building cross-platform apps and Vusion Labs." },
    { property: "og:image", content: "https://yourdomain.com/og-image.jpg" },
    { property: "og:type", content: "website" },
  ];
};

function HomeScreen() {
  return (
    <>
      <AboutContent />
      <MyGallery />
    </>
  );
}

export default HomeScreen;
