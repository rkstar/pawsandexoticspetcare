module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'function-paren-newline': ['off', 'never'], // turn this off
    'no-extra-parens': 0, // Interferes with jsx
    'no-underscore-dangle': 0, // Mongo _id
    'react/prefer-stateless-function': 1, // We'll choose manually
    'react/prop-types': 0, // Slows down while prototyping / experimenting
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'max-len': 1, // Sometimes necessary to have long strings and not risk whitespace
    'no-param-reassign': [2, { props: false }], // Allows assignment of new properties
    'new-cap': 0, // We don't have control over external dependecies using this
    'no-confusing-arrow': 0,
    semi: ['error', 'always'],
    'jsx-a11y/anchor-is-valid': ['off', 'never'],
    // these next 3 lines are becuase eslint does not like to play nice with meteor/ imports
    'import/no-extraneous-dependencies': 0,
    'import/extensions': ['off', 'never'],
  },
  plugins: ['react'],
};
