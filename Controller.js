'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const models = require('./models');
const port = 8000;
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
        let user = await User.build({
            name: data.name,
            email: data.email,
            password: data.password,
        });
        user.save();
        res.status(200).json({'status':'ok'}).end();
    }else{
        res.json({status:'error',error:'username already created.'}).end();
    }
});

app.post('/api/login',async(req,res)=>{
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
        res.json({status:'ok',token: token,user: user}).status(200).end();
    }
});

app.listen(port);
