import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
	theme: {
		tokens: {
			fonts: {
				heading: {
					value: "'Instrument Serif', Georgia, serif",
				},
				body: {
					value:
						"'Geist', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
				},
			},
			colors: {
				paper: { value: "#FBFAF7" },
				ink: { value: "#1A1512" },
				muted: { value: "#6D6863" },
				line: { value: "#E0DEDA" },
				accent: { value: "#118659" },
			},
		},
	},
	globalCss: {
		body: {
			bg: "paper",
			color: "ink",
			fontFamily: "body",
			fontWeight: "400",
		},
		"h1, h2, h3": {
			fontFamily: "heading",
			fontWeight: "400",
		},
	},
});

export const system = createSystem(defaultConfig, config);
