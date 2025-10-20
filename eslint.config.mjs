import { defineConfig } from "eslint/config";

// Import global definitions
import globals from "globals";

import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import promisePlugin from "eslint-plugin-promise";
import sonarjsPlugin from "eslint-plugin-sonarjs";
import unicornPlugin from "eslint-plugin-unicorn";
import jestPlugin from "eslint-plugin-jest";

export default defineConfig([
  // Base JS rules, with browser + node globals
  {
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        // include browser globals (window, document, etc)
        ...globals.browser,
        // include node globals (process, module, require, global, etc)
        ...globals.node,
        // include jest globals (describe, test, expect etc)
        ...globals.jest,
      },
    },
  },

  // TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
        tsconfigRootDir: new URL(".", import.meta.url).pathname,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      // desabilitar no-undef para TS, pois TS já detecta variáveis indefinidas
      "no-undef": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },

  // React / JSX files
  {
    files: ["**/*.tsx", "**/*.jsx"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Common rules for all JS/TS/JSX/TSX
  {
    files: ["**/*.{js,ts,tsx,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      import: importPlugin,
      "jsx-a11y": jsxA11yPlugin,
      promise: promisePlugin,
      sonarjs: sonarjsPlugin,
      unicorn: unicornPlugin,
      jest: jestPlugin,
    },
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "unicorn/prefer-module": "off",
    },
  },

  // Ignores / files to skip
  {
    ignores: ["node_modules/", "dist/", "build/", "frontend/js/api/", "openapi-ts.config.ts"],
  },
]);
