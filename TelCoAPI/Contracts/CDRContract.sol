pragma solidity ^0.4.0;


contract CDRcontract {

    struct CDR {
        uint id;
        string cdrcontent;
        address sender;
    }

    mapping(uint => CDR) public cdrcore;

    function CDRcontract(uint id, string cdrcontent, uint vid) {
        CDR memory cdrmem;
        cdrmem.id = id;
        cdrmem.cdrcontent = cdrcontent;
        cdrmem.sender = msg.sender;
        cdrcore[vid] = cdrmem;
    }
  
}