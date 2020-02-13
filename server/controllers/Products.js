const mongoose=require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
    //routes
    index: (req,res) => {
        Product.find()
        .then(allProducts=>{
            console.log('*'.repeat(25)+'ALL ProductS'+'*'.repeat(25))
            res.json({status:true, allProducts: allProducts})
            console.log('*'.repeat(25)+'ALL ProductS'+'*'.repeat(25))
        })
        .catch(err => res.json({status:false,err:err}))
    },
    create :(req,res) =>{
        console.log(req.body)
        Product.create(req.body)
        .then(addProduct=>{
            res.json({status:true,addProduct:addProduct})
        })
        .catch(err=>{
            res.json({status:false,err:err})
        })
    },
    update: (req,res) =>{
        console.log(req.body)
        console.log('this is the ID being edited: ', req.body._id)
        Product.findOneAndReplace(
            {_id:req.body._id},
            req.body,
            {runValidotars: true},
        )
        .then(updatedProduct=>{
            console.log('updatedProduct')
            res.json({status:true, updatedProduct:updatedProduct})
        })
        .catch(err=>{
            console.log(err)
            res.json({status:false, err:err})
        })
    },
    delete :(req,res) =>{
        Product.deleteOne({_id:req.params.id})
        .then(res.json({status:true}))
        .catch(err=>{
            res.json({status:false,err:err})
        })
    },
    findOne:(req,res) =>{
        console.log('Finding: ',req.params.id)
        Product.findById({
            _id: req.params.id
        })
            .then(foundProduct=>{res.json({
                status:true,
                foundProduct:foundProduct,
            })
        })
            .catch(err => {res.json({
                status: false,
                err: err,
            })
        })
    }
}