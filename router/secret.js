let router= require('express').Router();
let secretService = require('../service/secret')
let Sign = require('../service/Sign')
//查询所有秘密
router.get('/select',async (req,res)=>{
    let secrets = await secretService.getAllSecrets();
    console.log(req.body);
    res.send({
        code:0,
        data:secrets
    })
})

//查询秘密序号
router.get('/select/:id',async (req,res)=>{
    let secrets = await secretService.getSecretById(req.params.id);
    res.send({
        code:0,
        data:secrets
    })
})

//查询当前用户秘密
router.get('/listSelect',async (req,res)=>{
    let secrets = await secretService.getSecretByIdAndAccount(req.query.id,req.query.account);
    res.send({
        code:0,
        data:secrets
    })
})

//创建秘密
router.post('/create',async (req,res)=>{
    let secret = await secretService.addSecret(req.body)
    res.send({
        code:0,
        data:secret
    })
})

//获取线下签名
router.post('/Sign',async (req,res)=>{
    let signature = await Sign.Sign(req.body)
    res.send({
        code:0,
        data:signature
    })
})

//更新秘密
router.put('/update',async (req,res)=>{
    await secretService.updateSecret(req.query.id,req.query.account,req.body)
    console.log("heihie"+req.query.id);
    console.log("heihie"+req.query.account);
    res.send({
        code:0,
        msg:"成功"
    })
})
module.exports=router;