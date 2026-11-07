import {
	index,
	layout,
	type RouteConfig,
	route,
} from "@react-router/dev/routes";

export default [
	layout("pages/layouts/HomeLayout.tsx", [
		index("pages/HomeScreen.tsx"),
		route("blog", "pages/BlogScreen.tsx"),
		route("papers", "pages/PapersScreen.tsx"),
	]),
	route("*", "pages/NotFound.tsx"),
] satisfies RouteConfig;
