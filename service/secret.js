let Secret = require('../model/SecretInfoTable')

//查询所有秘密
async function getAllSecrets(){
    return await Secret.find().sort({"created":1})
}

//查询秘密序号
async function getSecretById(listid){
    return await Secret.find({account:listid}).sort({"created":1})
}

//查询当前用户秘密
async function getSecretByIdAndAccount(listid,account){
    return await Secret.findOne({listid:listid,account:account})
}

//创建秘密
async function addSecret(Secret){
    return await Secret.create(Secret)
}

//更新秘密
async function updateSecret(id,account,update){
    await isIdExist(id)
    let res = await Secret.updateOne({
        listid :id,account:account}
        ,update)
    if(res.matchedCount <1){
        throw Error("更新失败")
    }
}

//查看秘密序号是否存在
async function isIdExist(id){
    let res = await Secret.findOne({listid:id})
    if(!res){
        throw Error(`id为 ${id}不存在`)
    }
}

//删除秘密
async function deleteSecret(id){
    await isIdExist(id)
    let res = await Secret.deleteOne({
        _id:id
    })

    if(res.deletedCount < 1){
        throw Error("删除失败")
    }
}
module.exports = {
    getAllSecrets,
    addSecret,
    updateSecret,
    deleteSecret,
    getSecretById,
    getSecretByIdAndAccount
}
