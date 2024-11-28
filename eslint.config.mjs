// @ts-check

import eslintConfig from '@antfu/eslint-config'
import nuxtConfig from './.nuxt/eslint.config.mjs'

export default eslintConfig(
  // General
  {
    formatters: true,
    vue: {
      overrides: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
          registeredComponentsOnly: false,
        }],
      },
    },
    unocss: true,
  },

  nuxtConfig(),
)
