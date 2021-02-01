const path = require('path')

module.exports = function(app) {

    app.get('/index-bundle.js', (req,res) => {
        res.sendFile(path.join(__dirname, '/../public/index-bundle.js'));
    });

    app.get('/*', (req,res) => {
        const a = req.originalUrl.split('/')[1];
        if (a !== 'api' && a !== 'index-bundle.js') {
            res.sendFile(path.join(__dirname, '/../public/index.html'));
        }
    });
}
