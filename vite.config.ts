import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/__mocks__": path.resolve(__dirname, "./__mocks__"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
