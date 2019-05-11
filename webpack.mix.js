let mix = require("laravel-mix");
let env = require("dotenv").config();
mix = mix
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
          drop_console: false
        }
      }
    }
  })
  .sourceMaps();

// .browserSync({
//    inline: true,
//    hot: true,
//    contentBase: "/",
//    proxy: "admin-panel.test",
//    host: "admin-panel.test",
//    open: "external",
//    port: false,
//    ui: false
// })
if (process.env.NODE_ENV !== "development") {
  mix = mix.sourceMaps();
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
  .webpackConfig({
    output: {
      filename: "[name].js",
      chunkFilename: "dist/js/chunks/[name].js"
    }
  })
  .version();
