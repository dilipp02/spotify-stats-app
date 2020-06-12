const express = require("express");
const app = express();

app.get("/express_backend", (req, res) => {
  res.send({ express: "Yayy!!! finally connected to react" });
});

app.listen(5000, () => console.log("Listening on http://localhost:5000"));
