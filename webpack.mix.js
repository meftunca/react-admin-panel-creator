let mix = require("laravel-mix");

if (process.env.NODE_ENV === "development") {
  // mix.sourceMaps();
}
mix
  .react("src/index.js", "public")
  .sass("src/scss/app.scss", "public")
  .setPublicPath("public")
  .disableNotifications()
  .options({
    extractVueStyles: false,
    processCssUrls: true,
    terser: {},
    purifyCss: false,
    uglify: true,
    clearConsole: false
  })
  .version();
