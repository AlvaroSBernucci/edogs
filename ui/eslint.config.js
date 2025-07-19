import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    plugins: {
      js,
      "@typescript-eslint": tseslint.plugin,
      react: pluginReact,
    },
    rules: {
      // regras recomendadas do typescript-eslint
      ...tseslint.configs.recommended[0].rules,
      // regras recomendadas do eslint-plugin-react
      ...pluginReact.configs.recommended.rules,
      // ajustes próprios
      "react/react-in-jsx-scope": "off", // React 17+ não precisa importar React em jsx
      "no-undef": "error", // erro para variáveis não definidas como faDog
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
