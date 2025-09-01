const express = require("express");
const { engine } = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

route(app);

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});
