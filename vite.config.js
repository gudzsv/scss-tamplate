import glob from "fast-glob"
import path from "path"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 86
      },
      jpeg: {
        quality: 86
      },
      jpg: {
        quality: 86
      },
      webp: {
        quality: 86
      }
    })
  ],
  css: {},
  build: {
    minify: false,
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync(["./*.html", "./pages/**/*.html"])
          .map((file) => [
            path.relative(
              process.cwd(),
              file.slice(0, file.length - path.extname(file).length)
            ),
            fileURLToPath(new URL(file, import.meta.url))
          ])
      ),
      output: {
        assetFileNames: "assets/[name].[ext]"
      }
    }
  }
})
