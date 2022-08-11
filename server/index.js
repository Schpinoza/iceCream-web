const express = require("express");
const {init} = require("./services/db")
const router = require('./router/v1')

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

init()

app.use('/v1',router)



app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
});
    