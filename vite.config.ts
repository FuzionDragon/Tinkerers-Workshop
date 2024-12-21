import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import suidPlugin from "@suid/vite-plugin";

export default defineConfig({
  base: "/FuzionDragon.github.io/",
  plugins: [suidPlugin(), solidPlugin()],
  build: {
    target: "esnext",
  },
});

