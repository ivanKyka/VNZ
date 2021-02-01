module.exports = function (app, db) {
    app.post('/api/question', (req, res) => {
        db.collection('questions').insertOne(req.body);
        res.sendStatus(201);
    });

    app.get('/api/questions/all', async (req, res) => {
        const cursor = await db.collection('questions').find({});
        const data = await cursor.toArray();
        res.status(200).send(data);
    });
}