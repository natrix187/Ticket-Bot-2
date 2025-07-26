import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
	{ files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
	{ files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
	{ files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
	{
		rules: {
			curly: ["error", "multi"],
			"handle-callback-err": "off",
			"max-nested-callbacks": ["error", { max: 4 }],
			"no-console": "off",
			"no-empty-function": "error",
			"no-inline-comments": "error",
			"no-lonely-if": "error",
			"no-shadow": ["error", { allow: ["err", "resolve", "reject"] }],
			"no-var": "error",
			"no-undef": "off",
			"prefer-const": "error",
			quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
			"spaced-comment": "error",
			yoda: "error",
		},
	},
	eslintConfigPrettier,
]);
