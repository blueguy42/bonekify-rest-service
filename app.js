const express = require('express');
const routePenyanyi = require("./routes/routePenyanyi");
const routeUser = require("./routes/routeUser");

// https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/penyanyi", routePenyanyi);
app.use("/user", routeUser);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})