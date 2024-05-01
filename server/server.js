const express = require("express");
const connectDB = require("../config/db");
const cors = require("cors");
const path = require("path");

const app = express();

//Connect database
connectDB();
app.use(cors());

app.get(process.env.API_PREFIX ?? "/", (req, res) => res.send("API Running"));

//Define routes
app.use("/api/cars", require("./routes/api/car"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
