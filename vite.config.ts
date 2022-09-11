/// <reference types="vitest" />
import { defineConfig } from "vite";
import { setupVitePlugins } from "./plugins";
import { UserConfig } from "vitest";

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
    assetFileNames: `[name].[ext]`,
    exports: "named",
  },
};

export const config = {
  plugins: setupVitePlugins(),

  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },

  build: {
    rollupOptions,
    minify: "terser",
    cssCodeSplit: true,
    brotliSize: true,
    sourcemap: true, // 开通后可以在chrome中断点调试
    lib: {
      entry: "./src/entry.ts",
      name: "SueUI",
      fileName: "sue-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
      // formats: ["es"],
    },
    outDir: "./dist",
  },
};

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig(config as UserConfig);
