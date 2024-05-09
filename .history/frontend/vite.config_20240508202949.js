import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Existing server options
    // Add or adjust timeout
    watch: {
      // ... watch options
      // increase timeout in milliseconds (default 5000)
      timeout: 10000,
    },
  },
})
