const fs=require('fs');
const mongoose= require('mongoose');
const path=require('path');
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/Products',{useNewUrlParser:true});

const modelPath=path.join(__dirname,'./../modules/');

fs.readdirSync(modelPath).forEach((file)=>{
    if(file.indexOf('.js')>=0){
        require(modelPath +'/' +file);
    }
})