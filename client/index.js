const mongo = require("./database/connection");
const user = require("./database/modals/user");
const router = require("./routes/index.route");
const cors= require("cors");
const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// console.log(user);
// console.log(mongo)
// console.log(userObject);
app.use("/", router);
const main = async() => {
    const connect = await mongo.connectToDB();

};

main();

app.listen(process.env.PORT);



