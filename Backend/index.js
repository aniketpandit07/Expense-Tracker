const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const expenseRoute = require("./Routes/expense");

dotenv.config();
const app = express();

//middleware
app.use(cors());
app.use(express.json())

//routes
app.use("/expense", expenseRoute);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});



//db connection

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
