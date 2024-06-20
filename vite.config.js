import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/RefokusClone/", // Replace 'RefokusClone' with the actual repository name
  build: {
    assetsDir: "assets", // Directory where Vite will output static assets
    sourcemap: true, // Enable sourcemaps for debugging
  },
});
