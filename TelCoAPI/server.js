'use strict';


var port = process.env.PORT || 8001;

var Http = require('http');
var Express = require('express');
var BodyParser = require('body-parser');
var Swaggerize = require('swaggerize-express');
const swaggerUi = require('swagger-ui-express');
var Path = require('path');

var App = Express();

var Server = Http.createServer(App);

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({
    extended: true
}));

App.use(Swaggerize({
    api: Path.resolve('./config/swagger.json'),
    handlers: Path.resolve('./handlers'),
    docspath: '/swagger' 
}));

const swaggerDocument = require('./config/swagger.json');
 
App.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


Server.listen(port, function () {
    App.swagger.api.host = this.address().address + ':' + this.address().port;
    /* eslint-disable no-console */
    console.log('App running on %s:%d', this.address().address, this.address().port);
    /* eslint-disable no-console */
});
