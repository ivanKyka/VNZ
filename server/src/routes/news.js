const getAllData = require('../scraper');
const { differenceBy } = require('lodash');

module.exports = function (app, db) {
    app.get('/api/update_news', async (req, res) => {
        const news = await getAllData();
        // await db.collection('news').remove()
        // await db.collection('news').insertMany(news);
        const cursor = await db.collection('news').find({}, {sort: {date: -1}});
        const dbData = await cursor.toArray();
        const difference = differenceBy(news, dbData, 'href');
        // console.log(difference)
        if (difference.length) await db.collection('news').insertMany(difference);
        res.send(difference);
    });

    app.get('/api/news', async (req, res) => {
        const page = parseInt(req.query?.page) - 1 || 0;
        const cursor = await db.collection('news').find({}, {sort: {date: -1}, skip: page * 20, limit: 20});
        const length = await cursor.count();
        const dbData = await cursor.toArray();
        res.send({length, data: dbData});
    });
}