import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Configuration for antfu's config.
    stylistic: true,
  },
  {
    // Custom config, see:
    // https://github.com/antfu/eslint-config#customization
    rules: {
      '@typescript-eslint/brace-style': 'off',
      'curly': 'off',
      'dot-notation': 'off',
      'eslintvue/singleline-html-element-content-newline': 'off',
      'node/prefer-global/process': 'off',
      'no-console': 'off',
      'no-alert': 'off',
      'no-extra-parens': 'off',
      'node/prefer-global/process': 'off',
      'operator-linebreak': 'off',
      'vue/component-tags-order': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/no-mutating-props': 'off',
      'vue/prefer-template': 'off',
    },
  },
)
