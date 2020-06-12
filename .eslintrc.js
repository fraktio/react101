module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  plugins: ['react', 'react-hooks', 'import'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'prettier/prettier': [
      'error',
      { printWidth: 100, singleQuote: true, semi: false },
      { usePrettierRc: false },
    ],

    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/no-empty-interface': ['off'],
    'import/first': 2,

    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: [['builtin', 'external'], 'internal', 'parent', ['sibling', 'index']],
        'newlines-between': 'always',
      },
    ],

    'import/no-relative-parent-imports': 2,
    'import/no-default-export': 2,
    'import/no-duplicates': 2,
    'import/newline-after-import': 2,
    'import/no-cycle': 2,
    'no-shadow': 2,
    'no-console': ['error', { allow: ['warn'] }],
    'object-shorthand': ['error', 'always'],
  }
}
