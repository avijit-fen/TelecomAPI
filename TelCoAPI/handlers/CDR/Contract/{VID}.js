'use strict';
var dataProvider = require('../../../data/CDR/Contract/{VID}.js');
/**
 * Operations on /CDR/Contract/{VID}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: VID
     * produces: application/json, application/xml
     * responses: 200
     */
    get: function GetContract(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: 
     * description: 
     * parameters: VID, OBJCONTRACT
     * produces: 
     * responses: 200
     */
    post: function CreateContact(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
