module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist/', 'node_modules/', '.eslintrc.cjs', 'vite.config.ts', 'commitlint.config.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'simple-import-sort/imports': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-console': 'error',
  },
};
