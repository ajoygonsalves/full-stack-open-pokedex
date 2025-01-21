// eslint-disable-next-line no-undef
const express = require("express");
const app = express();
// eslint-disable-next-line no-undef
const dotenv = require("dotenv");

dotenv.config();

// get the port from env variable
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 2000;

app.use(express.static("dist"));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});
