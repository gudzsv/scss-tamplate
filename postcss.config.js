import purgecss from '@fullhuman/postcss-purgecss'
import autoprefixer from 'autoprefixer'
import postcssMediaQueries from 'postcss-sort-media-queries'

export default {
  plugins: [
    postcssMediaQueries({
      sort: "mobile-first",
    }),
    autoprefixer,
    purgecss({
      content: ["./**/*.html"],
    }),
  ],
};
