const express=require('express');
const router=express.Router();

router.post("/foodData",(req,res)=>{
    try {
        res.send([global.food_items,global.foodCategory]);
    } catch (error) {
        res.send(error.message);
        console.log("server error")
    }
})

module.exports=router;