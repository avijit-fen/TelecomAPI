'use strict';
var Mockgen = require('../../mockgen.js');
var contractUtil = require('../../contractUtility.js');
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
     * operationId: GetContract
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/CDR/Contract/{VID}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: 
     * parameters: VID, OBJCONTRACT
     * produces: 
     * responses: 200
     * operationId: CreateContact
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            var vid = req.params.VID;
            var cdrid = req.body.CDRID;
            var cdrcontent = req.body.CDRCONTENT;

            contractUtil.createContract(cdrid,cdrcontent,vid,callback);
        }
    }
};
