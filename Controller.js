'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const models = require('./models');
const port = process.env.PORT || 8000;
const User = models.User;
const jwt = require('jsonwebtoken');
const privateKey = 'jsonwebtoken_foda';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/api/insert',async (req,res)=>{
    let data = await req.body;
    let error = await User.findOne({
        where: {email: data.email}
    });
    if(error==null){
        let user = await User.create({
            name: data.name,
            email: data.email,
            password: data.password,
        });
        return res.status(200).json({'status':'ok'}).end();
    }else{
        return res.json({status:'error',error:'username already created.'}).end();
    }
});

app.post('/api/login',async(req,res)=>{
    try {
        console.log('api');
        let user = await User.findOne({
            where:{
                email: req.body.email,
                password: req.body.password,
            }
        });
        if(user == null){
            res.json({status:'error',error: 'User not found',message: 'Username or password incorrect'}).end();
        }else{
            let token = jwt.sign({token:user.dataValues.email},privateKey);
            res.json({status:'ok',token: token,
            user: JSON.stringify({
                name:user.name,
                email:user.email,
                birthday:user.birthday,
                image:user.image,
                id: user.id,
            })}).status(200).end();
        }
    } catch (error) {
        console.log(error);
    }
});

app.get('/',(req,res)=>{
    res.send('Servidor rodando...');
})
app.listen(port);
