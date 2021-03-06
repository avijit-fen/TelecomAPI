'use strict';
var web3 = require("web3");
var fs = require('fs');
var config = require('./config.js');
var solc = require('solc')

var initweb3 = function(){
    var Web3 = new web3();
    var provider = new web3.providers.HttpProvider(config.contract.rpcendpoint);
    Web3.setProvider(provider);
    return Web3;
};

var getabiData = function() {
    var source = fs.readFileSync("./Contracts/CDRContract.sol").toString();
    var compiled = solc.compile(source,1);
    var code = '0x' + compiled.contracts[":CDRcontract"].bytecode;
    // contract json abi, this is autogenerated using solc CLI
    var abi = JSON.parse(compiled.contracts[":CDRcontract"].metadata).output.abi;
    return {
        abi : abi,
        code : code
    }

}

var holdercontract = config.contract.holdercontractaddress;

module.exports =  {
    /**
     * Cached mock generator
     */
    initializeWeb3 : function() {
        return initweb3();
    },
    createContract : function(id,cdrcontent,vid,callback) {

        var myContract;
        var web3ini = initweb3(); 
        var contractData = getabiData();
        var cdrcontract = web3ini.eth.contract(contractData.abi);
    
    web3ini.eth.defaultAccount = web3ini.eth.coinbase;
    
    var result = web3ini.personal.unlockAccount(web3ini.eth.defaultAccount, "123", 600);
    cdrcontract.new(id,cdrcontent, vid, {from: web3ini.eth.coinbase, gas: 1000000, data: contractData.code}, function (err, contract) {
            if(err) {
                console.error(err);
                callback(err,null)
                return;
            // callback fires twice, we only want the second call when the contract is deployed
            } else if(contract.address){
                myContract = contract;
                var data = {};
                data.responses = contract.address
                callback(null,data);
                console.log('address: ' + myContract.address);
            }
        });
            //
    },
    getContractbyinfoByVID : function(vid,address,callback){
        var web3ini = initweb3(); 
        var contractData = getabiData();
        var cdrcontract = web3ini.eth.contract(contractData.abi);
        var deployed = cdrcontract.at(address);
        var arr = [];
        var obj = {
            CDRID : deployed.cdrcore(vid)[0],
            CDRLOCATION : deployed.cdrcore(vid)[1]
        }
        arr.push(obj);
        var data = {};
        data.responses = arr;
        callback(null,data);

    }

    
};
