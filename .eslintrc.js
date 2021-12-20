module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json'
    }
  },
  env: {
    'browser': true,
    'node': true,
    'es6': true,
    'jest/globals': true
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'google'],
  rules: {
    'semi': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 0,
    'operator-linebreak': 'off'

  }
}
