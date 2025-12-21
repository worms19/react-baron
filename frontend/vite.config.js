import { fileURLToPath, URL } from "node:url";

import react from "@vitejs/plugin-react";
import { transform } from "esbuild";
import { defineConfig } from "vite";

function jsxInJs() {
  return {
    name: "jsx-in-js",
    enforce: "pre",
    async transform(code, id) {
      if (!id.includes("/src/") || !id.endsWith(".js")) return null;

      const result = await transform(code, {
        loader: "jsx",
        jsx: "automatic",
        sourcemap: true,
        sourcefile: id,
      });

      return {
        code: result.code,
        map: result.map,
      };
    },
  };
}

export default defineConfig({
  plugins: [
    jsxInJs(),
    react({
      include: ["**/*.jsx", "**/*.tsx"],
    }),
  ],
  optimizeDeps: {
    // This repo contains multiple legacy HTML files (CRA build artifacts).
    // Point the dependency scanner at the actual app entry instead.
    entries: ["src/main.jsx"],
    esbuildOptions: {
      // This codebase uses JSX in .js files extensively.
      jsx: "automatic",
      loader: {
        ".js": "jsx",
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
