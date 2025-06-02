import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Use jsdom for browser-like tests
    reporters: process.env.GITHUB_ACTIONS ? ['verbose', 'github-actions']:['verbose', 'json', 'html'],
    outputFile: {
      json: './output/' + new Date().toUTCString().replaceAll(":", " ") + '-test-report.json'
    }
  },
})
