import { pageMeta } from "@/utils/seo";

export const meta = () =>
  pageMeta({
    title: "404 Not Found",
  });

function NotFound() {
  return <h1>404</h1>;
}
export default NotFound;
