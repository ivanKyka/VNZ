const news = require('./news');
const questions = require('./questions')

module.exports = function (app, db) {
    news(app, db);
    questions(app, db);
}
