import AboutContent from "@/components/home_components/AboutContent";
import MyGallery from "@/components/home_components/MyGallery";
import { pageMeta } from "@/utils/seo";
import type { MetaFunction } from "react-router";

export const meta = () =>
  pageMeta({
    title: "Godsend Joseph",
    description:
      "Godsend Joseph is a Full Stack Developer building cross-platform apps and Vusion Labs, a product company.",
    image: "https://godsendjoseph.dev/og-image.jpg",
    url: "https://godsendjoseph.dev",
    type: "website",
  });

function HomeScreen() {
  return (
    <>
      <AboutContent />
      <MyGallery />
    </>
  );
}

export default HomeScreen;
