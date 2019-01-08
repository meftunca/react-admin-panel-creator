let mix = require("laravel-mix");
let env = require("dotenv").config();

if (process.env.NODE_ENV === "development") {
  mix.sourceMaps();
}
mix
  .react("src/index.js", "public/js")
  .sass("src/scss/app.scss", "public/css")
  .version()
  .setPublicPath("public/js/part")
  .disableNotifications()
  .options({
    extractVueStyles: false,
    processCssUrls: true,
    terser: {},
    purifyCss: false,
    uglify: true,
    clearConsole: false
  });
