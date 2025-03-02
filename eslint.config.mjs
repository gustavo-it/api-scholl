import globals, { browser } from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node
    },
    env: {
      browser: false,
      es2021: true,
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
      'class-methods-use-this': 'off',
    }
},

  pluginJs.configs.recommended,
];
