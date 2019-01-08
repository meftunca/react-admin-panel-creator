let mix = require("laravel-mix");
let env = require("dotenv").config();

if (process.env.NODE_ENV === "development") {
  mix.sourceMaps();
}
mix
  .react("src/index.js", "public/dist/js")
  .sass("src/scss/app.scss", "public/dist/css")
  .version()
  .setPublicPath("public/dist")
  .disableNotifications()
  .options({
    extractVueStyles: false,
    processCssUrls: true,
    terser: {},
    purifyCss: false,
    uglify: true,
    clearConsole: false
  });
