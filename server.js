const express = require("express");
const app = express();
const mongodb = require("./db/connect");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const contactRoutes = require("./routes/contacts");


// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/contacts", contactRoutes)
  .use('/', require('./routes'))
  // .use('api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

  .get("/", (req, res) => {
    res.send("api assignment");
  });


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Running and connected on port ${port}`);
    });
  }
});
