import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import emp_route from "./routes/epmployeeRoutes.js";
const app = express();
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
mongoose
  .connect("mongodb+srv://mandwec12:assignment@cluster0.xakyjbb.mongodb.net/")
  .then(() => {
    console.log("connected to DB");
  });

app.use(express.json());
app.use(bodyparser.json());
app.use(cors(corsOptions))
app.use("/", emp_route);

app.listen(8080, () => {
  console.log("server started at 8080");
});
