const { MongoClient } = require('mongodb');
const url = `mongodb://root:${encodeURIComponent('rootpassword')}@localhost:27017`;
const client = new MongoClient(url, { useUnifiedTopology: true })
const dbName = 'test';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./src/routes');
const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

async function main() {
    // Use connect method to connect to the server
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName);
    routes(app, db);
    app.listen(3000, () => {
        console.log('Server is running!')
    })
    return 'done.'
}

main()
    .then(console.log)
    .catch(console.error)

