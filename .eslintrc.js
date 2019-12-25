module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  },
  "plugins": [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "@typescript-eslint/eslint-plugin-tslint"
  ],
  // "extends": [
  //   'eslint:recommended',
  //   'plugin:@typescript-eslint/eslint-recommended',
  //   'plugin:@typescript-eslint/recommended',
  // ],
  rules: {
    // "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/generic-type-naming": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-untyped-public-signature": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/typedef": "off",
    "no-else-return": "error",
  },
};
