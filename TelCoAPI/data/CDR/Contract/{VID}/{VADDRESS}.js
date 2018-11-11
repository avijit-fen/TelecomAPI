'use strict';
var Mockgen = require('../../../mockgen.js');
var contractutil = require('../../../contractUtility.js');
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
     * operationId: GETCDRBYIDANDADDR
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            var vid = req.params.VID;
            var vaddress = req.params.VADDRESS;
            var modifiedaddress = '0x' + vaddress
            contractutil.getContractbyinfoByVID(vid,modifiedaddress,callback);
        }
    }
};
