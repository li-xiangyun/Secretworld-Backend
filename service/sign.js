
var sigUtil = require("eth-sig-util")

//EIP712签名格式
async function Sign(Json){
      const typedData = {
        types : {
        EIP712Domain: [
            //token 名字
            {name: 'name',type: 'string'},
            //token 版本
            {name: 'version',type: 'string'},
            //链ID
            {name: 'chainId',type: 'uint256'},
            //合约地址
            {name: 'verifyingContract',type: 'address'},
        ],
        Permit: [
            //签名用户
            {name: 'owner',type: 'address'},
            //被授权用户
            {name: 'spender',type: 'address'},
            //允许适用的token
            {name: 'value',type: 'uint256'},
            //交易nonce
            {name: 'nonce',type: 'uint256'},
            //时间线
            {name: 'deadline',type: 'uint256'}
        ]
      },
      primaryType :'Permit',
      domain :{
        name: 'SecretCoin',
        version: '1',
        chainId: Json.chainid,
        verifyingContract: Json.contactAddr
      },
      message : {
        owner:Json.owner,
        spender:Json.spender,
        value:Json.value,
        nonce:Json.nonce,
        deadline:Json.deadline
      }}
    //签名者私钥
    var privateKey = "83d14b3641db0d27a93458dfa6b2df6cad1b4e7e89b19fe84efe669724e8413a";
    var privateKeyHex = Buffer.from(privateKey, 'hex')
    //签名并返回
    var signature = sigUtil.signTypedData_v4(privateKeyHex, { data:typedData})
    return signature;
}

module.exports = {Sign}