let mix = require("laravel-mix");
let env = require("dotenv").config();

if (process.env.NODE_ENV === "development") {
  //mix.sourceMaps();
}
mix
  .react("src/index.js", "public")
  // .sass("src/scss/app.scss", "public")
  .setPublicPath("public")
  .disableNotifications()
  .options({
    extractVueStyles: false,
    processCssUrls: true,
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
    },
    clearConsole: process.env.NODE_ENV === "production" ? true : false
  })
  .version();
