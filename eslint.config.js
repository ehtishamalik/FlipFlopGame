// eslint.config.js
import eslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  {
    ignores: ['node_modules', 'dist', '*.d.ts', 'eslint.config.js', 'webpack.config.js', 'vite.config.ts', , '.venv/**'],
    files: ['**/*.{ts, tsx}'],
    plugins: {
      '@typescript-eslint': eslintPlugin,
      'react-refresh': reactRefresh,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parser: typescriptParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
        ...globals.mocha,
      },
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      semi: ['error', 'always'],
    },
  },
];
