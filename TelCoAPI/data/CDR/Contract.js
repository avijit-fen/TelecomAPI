'use strict';
var Mockgen = require('../mockgen.js');
var ContractUtil = require('../contractUtility.js');
/**
 * Operations on /CDR/Contract
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: 
     * responses: 200
     * operationId: CreateDeployContract
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/CDR/Contract',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
