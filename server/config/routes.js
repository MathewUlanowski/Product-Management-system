const Products=require('./../controllers/Products')
const path=require('path')
module.exports=(app)=>{
    app.get('/api-products', Products.index)
    app.post('/api-products', Products.create)
    app.get('/api-products/:id', Products.findOne)
    app.put('/api-products/edit/:id', Products.update)
    app.delete('/api-products/delete/:id', Products.delete)


    app.all("*",(req,res,next)=>{
        res.sendFile(path.resolve('public/dist/public/index.html'))
    })
}