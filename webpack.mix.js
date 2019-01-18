let mix = require("laravel-mix");
let env = require("dotenv").config();

if (process.env.NODE_ENV === "development") {
  mix.sourceMaps();
}
mix
  .react("src/index.js", "public/dist/js", {
    outputStyle: "compressed"
  })
  .sass("src/scss/app.scss", "public", {
    outputStyle: "compressed"
  })
  .setPublicPath("public")
  .disableNotifications()
  .options({
    extractVueStyles: false,
    processCssUrls: false,
    terser: {},
    purifyCss: false,
    uglify: {
      uglifyOptions: {
        compress: {
          errors: false,
          warnings: false,
          drop_console: true
        }
      }
    }
  })
  .webpackConfig({
    output: {
      filename: "[name].js",
      chunkFilename: "dist/js/chunks/[name].js"
    }
  })
  .version();
