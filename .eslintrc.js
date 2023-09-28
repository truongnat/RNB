module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: '@react-native',
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
