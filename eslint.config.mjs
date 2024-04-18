// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(
    {
      stylistic: true,
      files: [
        '**/*.vue',
        '**/*.ts',
      ],
      rules: {
        '@typescript-eslint/brace-style': 'off',
        'curly': 'off',
        'dot-notation': 'off',
        'eslintvue/singleline-html-element-content-newline': 'off',
        'n/prefer-global/process': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-extra-parens': 'off',
        'node/prefer-global/process': 'off',
        'operator-linebreak': 'off',
        'unocss/order-attributify': 'off',
        'vue/component-tags-order': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/no-mutating-props': 'off',
        'vue/prefer-template': 'off',
        'vue/singleline-html-element-content-newline': 'off',
      },
    },
  ),
  {
    // ...other rules
  },
)
