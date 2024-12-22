import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import suidPlugin from "@suid/vite-plugin";
import netlify from "solid-start-netlify";

export default defineConfig({
  base: "/Tinkerers-Workshop/",
  plugins: [
    suidPlugin(), 
    solidPlugin(),
    solid({
      adapter: netlify({edge: true}),
    }),
  ],
  build: {
    target: "esnext",
  },
});

