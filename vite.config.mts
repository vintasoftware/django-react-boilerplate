import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { readFileSync, writeFileSync } from 'fs'

// Custom plugin to generate Django-compatible manifest
const djangoManifestPlugin = () => {
  return {
    name: 'django-manifest',
    writeBundle(options, bundle) {
      const stats = {
        status: 'done',
        assets: {},
        chunks: {},
        publicPath: options.dir.replace(path.resolve('./'), '') + '/',
      }

      // Process bundles to match webpack-stats.json format
      Object.entries(bundle).forEach(([fileName, fileInfo]) => {
        if (fileInfo.type === 'chunk') {
          const name = fileInfo.name || 'main'
          if (!stats.chunks[name]) {
            stats.chunks[name] = []
          }
          stats.chunks[name].push({
            name: fileName,
            path: path.join(stats.publicPath, fileName)
          })
        } else if (fileInfo.type === 'asset') {
          const name = fileInfo.name || fileName
          stats.assets[name] = {
            name: fileName,
            path: path.join(stats.publicPath, fileName)
          }
        }
      })

      // Write Django-compatible stats file
      writeFileSync(
        path.resolve('./webpack-stats.json'),
        JSON.stringify(stats, null, 2)
      )
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  
  return {
    plugins: [
      react({
        // Use SWC for consistency with current setup
        jsxRuntime: 'automatic',
        parserConfig: {
          syntax: 'typescript',
          tsx: true,
        }
      }),
      !isDev && djangoManifestPlugin()
    ].filter(Boolean),
    
    root: './',
    
    build: {
      outDir: './frontend/webpack_bundles/',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'frontend/js/index.tsx')
        },
        output: {
          entryFileNames: isDev ? '[name].js' : '[name]-[hash].js',
          chunkFileNames: isDev ? '[name].js' : '[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            if (assetInfo.name.endsWith('.css')) {
              return isDev ? '[name].css' : '[name]-[hash].css'
            }
            return 'assets/[name]-[hash][extname]'
          }
        }
      },
      sourcemap: true,
      // Ensure chunks are split similar to webpack config
      cssCodeSplit: true,
      minify: !isDev
    },
    
    server: {
      host: '0.0.0.0',
      port: 3000,
      cors: true,
      hmr: true,
      // Proxy API requests to Django
      proxy: {
        '/api': {
          target: 'http://localhost:8000',
          changeOrigin: true,
        },
        '/admin': {
          target: 'http://localhost:8000',
          changeOrigin: true,
        }
      }
    },
    
    resolve: {
      alias: {
        // Match webpack's module resolution
        'frontend': path.resolve(__dirname, './frontend'),
        '@': path.resolve(__dirname, './frontend/js'),
        // Handle ~ imports from webpack
        '~bootstrap': path.resolve(__dirname, './node_modules/bootstrap'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    
    css: {
      preprocessorOptions: {
        scss: {
          // Handle webpack-style ~ imports  
          additionalData: `@use "sass:math";`,
          // Use includePaths instead of custom importer
          includePaths: ['node_modules']
        }
      }
    },
    
    define: {
      // Vite uses import.meta.env instead of process.env
      'process.env.NODE_ENV': JSON.stringify(mode),
    }
  }
})