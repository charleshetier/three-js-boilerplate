import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig(async () => {
  const { default: glsl } = await import('vite-plugin-glsl')

  return {
    plugins: [glsl()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    assetsInclude: ['**/*.glb'],
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    }
  }
})
