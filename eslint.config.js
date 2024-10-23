import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import js from '@eslint/js';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import eslintPrettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import parser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': eslintReactHooks,
      'eslint-react': eslintReact,
      'eslint-react-refresh': eslintReactRefresh,
      prettier: eslintPrettierPlugin,
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  { ...eslintReact.configs.flat.recommended, settings: { react: { version: 'detect' } } },
  {
    languageOptions: {
      parser,
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022,
      },
    },
  },
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'no-undef': 'error',
      semi: 'error',
      'prefer-const': 'error',
      'react/react-in-jsx-scope': 'off',
    },
  },
  { files: ['**/*.{js,jsx,ts,tsx}'] },
  {
    ignores: ['node_modules', 'dist'],
  },
  eslintConfigPrettier,
);
