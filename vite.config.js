import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/modern-ui-ux-gpt3-page/",
  plugins: [react()],
});
