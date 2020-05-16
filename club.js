const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express();
const port =80;

//express specific stuff
app.use('/static',express.static('static'))
//for serving static file
app.use(express.urlencoded())

//pug specific stuff
app.set('viewengine','pug')
//set the template engin as pug
app.set('views',path.join(__dirname,'views'));

//endpoints
app.get('/',(req,res)=>{
    cons con = 'this is the best content on the interbne'
    const params = {'title':'pubg is the best game','content': con}
    res.status(200).render('index.pug',params);
})

app.post('/',(req,res)=>{
    name= req.body.name,
    age= req.body.age,
    gender= req.body.gender,
    address= req.body.address,
    more= req.body.more

    let outputToWrite = `the name of the client is  ${name},${age},residing at${address}. more abiout him or her${more}`

    fs.writeFileSync('output.txt',outputToWrite);
    const params ={'message':'your forms ahas been submitted sucessfily'};
    res.status(200).render('index.pug',params);
});

//statr the server
app.listen(port,()=>{
    console.log(`the applicateionm started sucesfully at the port :${port}`)
});
