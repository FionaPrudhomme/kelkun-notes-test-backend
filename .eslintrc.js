module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'unused-imports',
    "simple-import-sort",
    "unicorn"
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    'no-console': ['error'],
    'semi': ['error', 'never'],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-irregular-whitespace': 'error',
    'no-trailing-spaces': 'error',
    'no-debugger': 'error',
    "indent": ["error", 2, { "SwitchCase": 1, "ignoredNodes": ["PropertyDefinition"] }],
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-imports': 'error',
    "comma-dangle": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    '@typescript-eslint/space-before-function-paren':  [
      'error',
      {
        'anonymous': 'never',
        'named': 'always'
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'named': 'always'
      }
    ],
    'operator-linebreak': [
      'warn',
      'before'
    ],
    'curly': 'off'
  },
  overrides: [
    {
      files: ['*.{ts}'],
      'extends': [
        'eslint:recommended',
      ],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    },
    {
      files: ['*.ts'],
      env: {
        jest: true
      }
    }
  ]
}