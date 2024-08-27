const vue = require('eslint-plugin-vue');
const prettier = require('eslint-plugin-prettier');
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: {
    node: true,
  },
  plugins: ['vue', 'prettier'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
  },
});
