const express = require("express");
const connectDB = require("../config/db");
const cors = require("cors");

const app = express();

//Connect database
connectDB();
app.use(cors());

app.get("/", (req, res) => res.send("API Running"));

//Define routes
app.use("/api/cars", require("./routes/api/car"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
