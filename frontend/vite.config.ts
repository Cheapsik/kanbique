import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local',
      globalModulePaths: [/global\.scss$/],
      generateScopedName: '[local]__[hash:base64:5]',
    },
  },
});
