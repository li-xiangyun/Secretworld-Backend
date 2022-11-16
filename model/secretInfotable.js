//构建秘密信息表
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    //ipfs hash表
    content:{
        type:Array,
        unique:false
    },
    //留言信息表
    commitList:{
        type:Array,
        unique:false
    },
    //秘密持有用户
    account:{
        type:String,
        unique:false,
        required:[true,'account不能为空']
    },
    //秘密序号
    listid:{
        type:String,
        unique:false
    },
    //喜欢数
    likecount:{
        type:String,
        unique:false
    },
    //不喜欢数
    unlikecount:{
        type:String,
        unique:false
    },
    //秘密备注信息
    commit:{
        type:String,
        default:false
    },
    //发布者秘密备注信息
    info:{
        type:String,
        unique:false
    },
    //秘密创建时间
    created:{
        type:Date,
        default:Date.now()
    }
    
})

module.exports = mongoose.model('Secrets',schema)