module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    "plugin:vue/essential",
    "plugin:prettier-vue/recommended",
    "eslint:recommended",
    'plugin:vue/recommended',
    'plugin:jsdoc/recommended'
  ],
  settings: {
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        /**
         * Use prettier to process `<template>` blocks or not
         *
         * If set to `false`, remember not to `extends: ['prettier/vue']`, as you need the rules from `eslint-plugin-vue` to lint `<template>` blocks
         *
         * @default true
         */
        template: false,
        requirePragma: true,
        insertPragma: true
      }
    }
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'prettier-vue/prettier': [
      'error',
      {
        // Override all options of `prettier` here
        // @see https://prettier.io/docs/en/options.html
        // requirePragma & insertPragma are used to prevent lint check all files
        // please read the prettier documentation on this before removing
        requirePragma: true,
        insertPragma: true
      },
    ],
  },
  plugins: [
    "jsdoc"
  ],
  globals: {
    process: "readable",
    require: "readable",
    planhat: "readable",
    plantrack: "readable"
  }
}