const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");
const cors = require('cors');

const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

const app = express();
app.use(cors(corsOptions));

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT  || 8800, () => {
  console.log("App is running");
});
