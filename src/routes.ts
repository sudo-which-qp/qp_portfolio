import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("pages/layouts/HomeLayout.tsx", [index("pages/HomeScreen.tsx")]),
  route("*", "pages/NotFound.tsx"),
] satisfies RouteConfig;
