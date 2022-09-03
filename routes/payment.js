const e = require("express");
const express = require("express")
const router = express.Router();

router.post("/makepaymet",(req,res)=>{
    if(req.body.items==null){
        return res.status(400).send({error: "no product in cart"})
    }
    req.body.items.forEach(element => {
        if(e.name==null || e.quantity==null){
            return res.status(400).send("missing data to process payment")
        }
    });
    res.end("payed")
})

router.get()

module.exports= router;