const express = require("express");
const dotenv = require("dotenv");

const colors = require("colors");
const cors = require("cors");
const connectDB = require("./config/db");

// custome
const errorHandler = require("./middleware/error");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Mount routers
const auth = require("./routes/auth");
const auto = require("./routes/auto/auto.route")

app.use("/api/auto", auto)

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
