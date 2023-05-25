const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  rules: {
    'import/namespace': 'off',
    'import/default': 'off',
    'vue/multi-word-component-names': 'off',
  },
})
