import path from 'path'
import VueMacros from 'unplugin-vue-macros'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: Vue(),
      },
    }), 
    UnoCSS({
      configFile: './uno.config.ts',
    }),
    svgLoader()
  ],
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  }
})
