// Vite provides the local development server and production build.
import { defineConfig } from "vite";
// The Tailwind Vite plugin scans source files and generates only used utilities.
import tailwindcss from "@tailwindcss/vite";

// Export the smallest configuration needed for this vanilla Tailwind project.
export default defineConfig({
  plugins: [tailwindcss()],
});
