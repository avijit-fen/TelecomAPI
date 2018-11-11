'use strict';
var dataProvider = require('../../../../data/CDR/Contract/{VID}/{VADDRESS}.js');
/**
 * Operations on /CDR/Contract/{VID}/{VADDRESS}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: VID, VADDRESS
     * produces: 
     * responses: 200
     */
    get: function GETCDRBYIDANDADDR(req, res, next) {
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
    }
};
