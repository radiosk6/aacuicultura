import vue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
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
