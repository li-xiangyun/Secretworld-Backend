require('../db')
let secretService = require('../service/secret')


async function testGetAllSecrets(){
   let secrets =  await secretService.getAllTodos();
   console.log(secrets);
}

async function testAddSecret(){
    let secret ={
        content:"my secret add"
    }
    let result = await secretService.addSecret(secret);
    console.log(result);
}

async function testUpdateSecret(){
    let update = {
        content :"my secret update"
    }
    let id = "625a720639eac41e2b9a1dd8"
    await secretService.updateSecret(id,update);
}

async function testDeleteSecret(){
    let id = "625a720639eac41e2b9a1dd8"
    await secretService.deleteSecret(id)
}
testAddSecret()