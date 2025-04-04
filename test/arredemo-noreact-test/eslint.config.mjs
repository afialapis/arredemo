import globals from "globals";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["dist/", "lib/", "libs/", "build/", "arredemo/"],
}, ...compat.extends("eslint:recommended"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.mocha,
            ...globals.node,
        },

        parser: babelParser,
        ecmaVersion: 7,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
                globalReturn: true,
                impliedStrict: true,
                experimentalObjectRestSpread: true,
            },

            requireConfigFile: false,

            babelOptions: {
                babelrc: true,
            },
        },
    },

    rules: {
        semi: 0,
        "vars-on-top": 0,
        "spaced-comment": 0,
        "prefer-template": 0,
        "consistent-return": 0,
        "comma-dangle": 0,
        "no-use-before-define": 0,
        "no-return-assign": 0,
        "no-case-declarations": 0,
        "no-cond-assign": 0,
        "no-console": 0,
        "max-len": 0,
        "arrow-body-style": 0,
        "new-cap": 0,
        quotes: 0,
        "quote-props": 0,
        "prefer-arrow-callback": 0,
        "func-names": 0,
        "padded-blocks": 0,
        "keyword-spacing": 0,
        "no-var": 1,
        "no-trailing-spaces": 0,
        "no-unused-expressions": 0,

        "no-unused-vars": [1, {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
        }],

        "no-inner-declarations": 0,
        "space-before-function-paren": 0,
        "global-require": 0,
        "no-empty": 0,
    },
}];