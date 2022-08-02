
const express = require("express")

const router = express.Router();
const authenticate = require("../middlewares/authenticate")
const authrization = require("../middlewares/authorization")

const Product = require("../models/product.model")

router.post("", authenticate,authrization(["admin"]), async (req, res) => {

    req.body.user_id = req.userID;
    try{
        const product = await Product.create(req.body)
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
})

router.get("", async (req, res) => {
    try{
        const product = await Product.find()
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

router.patch("/:id",authenticate,authrization(["admin","Manager"]),async(req,res)=>
{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.send(product)

    } catch (error) {
       console.log(error) 
    }
})

module.exports = router;