module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'no-unused-vars': 1,
    'no-multiple-empty-lines': 2,
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'never'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prettier/prettier': ['error', { singleQuote: true }],
    'import/prefer-default-export': 'off',
    'arrow-parens': precess.env.NODE_ENV === 'production' ? 2 : 0,
    'generator-star-spacing': 0,
    'no-debugger': precess.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
