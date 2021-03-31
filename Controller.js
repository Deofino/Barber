const express = require('express');
const cors = require('cors');
const app = express();
const models = require('./models');
const port = 8000;
const User = models.User;

app.use(cors());

app.get('/',async (req,res)=>{
    let sla = await User.findAll();
    console.log(sla);
    res.json(sla);
})

app.listen(port);
