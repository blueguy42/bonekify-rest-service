const express = require('express');
const routePenyanyi = require("./routes/routePenyanyi");
const routeUser = require("./routes/routeUser");
const routeSubscription = require("./routes/routeSubscription");

// https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

const app = express();
var cors = require('cors')
const port = 3000;

app.use(express.json());
app.use(cors())
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/penyanyi", routePenyanyi);
app.use("/user", routeUser);
app.use("/subscription", routeSubscription);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})