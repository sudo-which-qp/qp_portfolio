type SeoOptions = {
	title: string;
	description?: string;
	image?: string;
	url?: string;
	type?: "website" | "article";
};

export function pageMeta({
	title,
	description,
	image,
	url,
	type = "website",
}: SeoOptions) {
	return [
		{ title },

		...(description
			? [
					{
						name: "description",
						content: description,
					},
				]
			: []),

		// Open Graph
		{ property: "og:title", content: title },

		...(description
			? [{ property: "og:description", content: description }]
			: []),

		{ property: "og:type", content: type },

		...(url ? [{ property: "og:url", content: url }] : []),

		...(image ? [{ property: "og:image", content: image }] : []),

		// Twitter / X
		{
			name: "twitter:card",
			content: image ? "summary_large_image" : "summary",
		},
		{ name: "twitter:title", content: title },

		...(description
			? [{ name: "twitter:description", content: description }]
			: []),

		...(image ? [{ name: "twitter:image", content: image }] : []),
	];
}