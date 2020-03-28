const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const port = 3000;

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);


const adsetRoute = require("./ads/routes/adset_route");
const campainRoute = require("./ads/routes/campain_route");


app.use("/adset", adsetRoute);
app.use("/campain", campainRoute);


app.get("/", (req, res, next) => {
  
  res.send("Node start");
});

app.listen(port, function () {
  console.log(`App app listening on port ${port}`);
});

