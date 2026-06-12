import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Lokal dev'de /api çağrıları production'a proxy'lenir —
    // Vercel serverless fonksiyonları lokalde çalışmadığı için.
    proxy: {
      "/api": {
        target: "https://www.benservis.com",
        changeOrigin: true,
      },
    },
  },
});
