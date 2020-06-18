const express = require("express");
const path = require("path");
const querystring = require("querystring");
const request = require("request");
const app = express();
const client_id = "f07ad09fc74d4e03a045e09717fb51ad";
const client_secret = "24db1d252c354aa1b5ddd7c1d97c9964";

function generateRandomString(length) {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const state = generateRandomString(16);

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("/", function (req, res) {
  res.render(path.resolve(__dirname, "./client/build/index.html"));
});

app.get("/login", (req, res) => {
  const scope = [
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-currently-playing",
    "playlist-read-private",
    "user-follow-read",
    "user-read-recently-played",
    "user-follow-modify",
  ];
  res.redirect(
    `https://accounts.spotify.com/authorize?${querystring.stringify({
      client_id: client_id,
      response_type: "code",
      redirect_uri: "http://localhost:5000/callback",
      state: state,
      scope: scope,
    })}`
  );
});

app.get("/callback", (req, res) => {
  const code = req.query.code;
  const state = req.query.state;
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: "http://localhost:5000/callback",
      grant_type: "authorization_code",
    },
    headers: {
      Authorization: `Basic ${new Buffer.from(
        `${client_id}:${client_secret}`
      ).toString("base64")}`,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      const refresh_token = body.refresh_token;

      // we can also pass the token to the browser to make requests from there
      res.redirect(
        `http://localhost:3000/#${querystring.stringify({
          access_token,
          refresh_token,
        })}`
      );
    } else {
      res.redirect(`/#${querystring.stringify({ error: "invalid_token" })}`);
    }
  });
});

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/public", "index.html"));
});

app.listen(5000, () => console.log("Listening on http://localhost:5000"));
