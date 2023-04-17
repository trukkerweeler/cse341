const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

// const mongo = require('mongodb').MongoClient
// const url = 'mongodb://localhost:17041'
// const dbname = 'testdb'

// mongo.connect(url, (err, client) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log('Connected successfully to server')
//     const db = client.db(testdb)
// })

// app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})
