let mix = require("laravel-mix");

mix
  .react("src/index.js", "public")
  .sass("src/scss/app.scss", "public")
  .version()
  .sourceMaps()
  .setPublicPath("public")
  .disableNotifications();

// mix.browserSync({ proxy: "starter.test" });

// var LiveReloadPlugin = require("webpack-livereload-plugin");

// mix.webpackConfig({
//   //   plugins: [new LiveReloadPlugin()],
//   node: {
//     console: false,
//     fs: false,
//     net: false,
//     tls: false
//   }
// });
