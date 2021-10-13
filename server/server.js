const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
const PORT = process.env.DB_PORT;

require('./config/mongoose.config');
app.use(cors(), express.json(), express.urlencoded({ extended: true }));
require('./routes/pokemon.routes')(app);

app.listen( PORT, () => console.log(`Listening to port: ${PORT}`));