import {url} from "../config/db.config.js";
import tutorialModel from './tutorial.model.js';
import mongoose from "mongoose";

mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = url;
db.tutorials = tutorialModel(mongoose);
export default db;
// const app = express();
// app.use(express.static('build'))
// app.use(cors())
// app.use(express.json())
// const db = require("./app/models");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });