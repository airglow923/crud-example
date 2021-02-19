module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/vue3-essential',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js')
      }
    }
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'never'
      }
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true
      }
    ]
  },
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  }
};
