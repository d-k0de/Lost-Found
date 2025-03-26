import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Your custom port
    strictPort: true, // Exit if port is in use
    open: true, // Automatically open browser
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './script.js',
      output: {
        entryFileNames: 'bundle.js',
        format: 'iife',
      }
    }
  },
  resolve: {
    extensions: ['.js']
  },
  define: {
    'import.meta.env': 'import.meta.env'
  }
});