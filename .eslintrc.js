module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb',
    'plugin:you-dont-need-lodash-underscore/compatible'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "arrow-parens": ["error", "as-needed"],
    "indent": ["error", 2],
    "no-shadow": [2, {
      "allow": ["done"]
    }],
    "global-require": "off",
    "radix": "off",
    "no-new": "off",
    "max-len": "off",
    "vue/valid-v-for": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "import/no-dynamic-require": "off",
    "default-case": "off",
    "no-extend-native": "off",
    "no-underscore-dangle": "off",
    "object-curly-newline": "off",
    "vue/require-v-for-key": "off",
    "require-v-for-key": "off",
    "no-param-reassign": "off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
