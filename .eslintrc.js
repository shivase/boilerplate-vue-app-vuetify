module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  plugins: ['redos', 'import'],
  extends: ['eslint:recommended', 'prettier'],
  ignorePatterns: ['dist/'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
    },
  },
  rules: {
    eqeqeq: ['error', 'smart'],
    'redos/no-vulnerable': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'sort-imports': 0,
    'import/order': [2, { alphabetize: { order: 'asc' } }],
  },
  overrides: [
    {
      files: ['*ts'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
      },
      extends: [
        'plugin:vue/vue3-recommended',
        '@vue/prettier',
        '@vue/typescript/recommended',
        'plugin:vue-scoped-css/vue3-recommended',
        'prettier',
      ],
      rules: {
        'vue/require-default-prop': 'off',
        'vue/html-closing-bracket-newline': [2, { multiline: 'never' }],
      },
    },
  ],
};
