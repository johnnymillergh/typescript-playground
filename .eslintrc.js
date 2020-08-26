module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    browser: false,
    node: true,
    es6: true
  },

  rules: {
    'space-before-function-paren': [
      2,
      'always'
    ],

    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],

    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: false
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false
      }
    }],

    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    '@typescript-eslint/no-explicit-any': [0],

    'prefer-const': 2,
    'object-curly-spacing': [2, 'always', { objectsInObjects: false }],
    'array-bracket-spacing': [2, 'never'],
    'no-unused-vars': 'error',
    'yoda': 'off'
  }
}
