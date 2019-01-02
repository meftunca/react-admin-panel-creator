var Twitter = require("twitter");
var client = new Twitter({
  consumer_key: "RNOGX5TiB0Kyto9ggDxcT8Gie",
  consumer_secret: "Kn7ut4mvlwqPDNXIrl9uQxAblb1115Rg87XZ319UEaaJ09Kf0i",
  access_token_key: "3293164734-flLNI737Kx80gPEsJN5DBMXHN2uCew8HYkSwsQD",
  access_token_secret: "uMktnXidYlONSa3lV45AXPS7mvnW5k0YAU7wwWTPqDFrB"
});
let timeLine = new Promise(function(resolve, reject) {
  client.get("statuses/user_timeline", function(error, tweets, response) {
    if (error) resolve(error);
    reject(tweets);
  });
});
module.exports = timeLine;
