import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/juman-travel/", // <-- important: use your GitHub repo name
  plugins: [react()],
});
