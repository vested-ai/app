import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import stylisticJs from '@stylistic/eslint-plugin-js';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: [
      "**/*.{js,mjs,cjs,ts,jsx,tsx}"
    ],
    languageOptions: { 
      globals: globals.browser 
    }
  },
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    settings: {
      react: {
        version: 'detect' // Automatically detect React version
      }
    }
  },
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // React rules
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/prop-types': 'off', // Not needed when using TypeScript
      'react/display-name': 'off',
      
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // General rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'warn',
      'no-unused-vars': 'off', // Using TypeScript's no-unused-vars instead
      'no-irregular-whitespace': [
        'error',
        {
          skipStrings: true,
          skipComments: true,
          skipRegExps: true,
          skipTemplates: true,
        },
      ],
      '@stylistic/js/indent': ['error', 4],
    }
  },
  // {
  //   ignorePatterns: ['node_modules/', 'babel.config.js', 'metro.config.js'],
  
  // },
  // {
  //   jest: {
  //     testPathIgnorePatterns: ['/node_modules/', '/app-example/']
  //   },
  // },
  // {
  //   overrides: [
  //     {
  //       // Test files only
  //       files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  //       extends: ['plugin:testing-library/react'],
  //     },
  //   ],
  // }
];