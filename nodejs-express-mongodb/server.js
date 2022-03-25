import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./app/models/index.js";
import myRoutes from "./app/routes/tutorial.routes.js";
// const myRoutes = require('./app/routes/tutorial.routes');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  // simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
});

// set port, listen for requests
myRoutes(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
  