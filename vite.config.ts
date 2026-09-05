import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: '/' for custom domain aceisoriginal.com
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
