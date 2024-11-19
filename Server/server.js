const express = require("express");
const errorHandler = require("./Middleware/errorHandler");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
// body parser
app.use(express.json());

//Routes
app.use("/api/contacts", require("./Routes/contactRoute"));

// Error handler
app.use(errorHandler);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
