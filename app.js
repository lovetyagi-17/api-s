const bodyParser = require('body-parser');
const routes = require('./routes/index');
var cors = require('cors')
module.exports = function(app) {

  app.use(cors())
    app.use(bodyParser.json())

    app.use('/api',routes);

    //invalid url
    app.all('*', function(req, res) {
        res.send("invalid url" + String(req.url));
      });

}


