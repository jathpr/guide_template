module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
		es6: true,
		node: true,
		amd: true
  },
  extends: [
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		
		"prettier",
		"prettier/react",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended"
	],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      'classes': true,
      'jsx': true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    "prettier"
  ],
  globals: {
    'Expo': false,
  },
  rules: {
    "arrow-body-style": 2,
    "react/self-closing-comp": 2,
    "no-console": "off",
    "newline-before-return": 2,
    "react/prop-types": 0,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
};
