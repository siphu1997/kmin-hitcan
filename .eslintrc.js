module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['react-app', 'react-app/jest'],
  plugins: ['react', 'prettier'],
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['error'] }]
        : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 1,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        trailingComma: 'none',
        endOfLine: 'lf',
        tabWidth: 2,
        useTabs: false,
        singleQuote: false,
        printWidth: 80,
        jsxSingleQuote: false,
        bracketSpacing: true,
      },
    ],
  },
};
