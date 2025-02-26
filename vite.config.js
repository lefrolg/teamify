import {fileURLToPath, URL} from 'node:url'

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';

import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({mode}) =>{

  return {
    base: mode === 'production' ? '/teamify/' : '/',
    plugins: [
      vue(), tailwindcss(), Components({
        resolvers: [
          PrimeVueResolver()
        ]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  }
})
