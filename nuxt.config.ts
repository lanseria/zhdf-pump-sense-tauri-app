export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/icon',
    'nuxt-svgo',
    '@nuxt/eslint',
  ],
  app: {
    head: {
      title: '机泵数据获取',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'format-detection', content: 'no' },
      ],
      bodyAttrs: {
        class: 'font-text antialiased',
      },
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
  },
  experimental: {
    typedPages: true,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  svgo: {
    autoImportPath: '@/assets/',
  },
  icon: {
    mode: 'svg',
  },
  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true,
      hmr: {
        protocol: 'ws',
        host: '0.0.0.0',
        port: 3001,
      },
      watch: {
        ignored: ['**/src-tauri/**'],
      },
    },
    optimizeDeps: {
      include: [
        '@tauri-apps/api/app',
        '@tauri-apps/plugin-shell',
        '@tauri-apps/plugin-notification',
        '@tauri-apps/plugin-os',
        '@tauri-apps/plugin-fs',

      ],
    },
  },
  srcDir: 'src/',
  ssr: false,
  devServer: {
    host: '0.0.0.0',
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  compatibilityDate: '2024-10-01',
})
