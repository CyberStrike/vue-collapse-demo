module.exports = {
  root: true,
  env: { node: true, browser: true, es6: true },
  extends: ['plugin:vue/essential', '@vue/standard'],
  plugins: ['vue'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'production' === process.env.NODE_ENV ? 'error' : 'off',
    'no-debugger': 'production' === process.env.NODE_ENV ? 'error' : 'off',
    yoda: ['error', 'always'],
    'vue/max-attributes-per-line': ['off'],
    // don't require .vue extension when importing
    'import/extensions': [ 'error', { ignorePackages: true, 'js': 'never', 'vue': 'never' } ],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e' // for e.returnvalue
        ]
      }
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js']
      }
    ],
    // allow alignment of import from statement, allow alignment of assignment in variables
    'no-multi-spaces': [
      'error',
      { exceptions: { VariableDeclarator: true, ImportDeclaration: true } }
    ]
  }
}
