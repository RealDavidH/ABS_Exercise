const express = require('express');
const app = express();
require("./config/connection")
app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./routes/account.routes')(app);
app.listen(8000, () => console.log("The server is all fired up on port 8000"));

