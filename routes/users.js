const router = require("express").Router();
let User = require("../models/user");


// Create a new user

router.route("/add").post(async (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
    
    

    const newUser = new User({
        username,
        password,
        
    })
    try{
        const systemuser = await User.findOne({username:username,password:password})

        if(systemuser){
            res.json("exist")
        }
        else{
            res.json("notexist")
            newUser.save()
        }

    }
    catch(e){
        res.json("fail")
    }
    

})

//login user

router.route("/get/login").post(async (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    
    try{
        const systemuser = await User.findOne({username:username,password:password})
    
            if(systemuser){
                res.json("exist")
            }
            else{
                res.json("notexist")
            }
    }
    
    catch(e){
        res.json("fail")
    }
})


module.exports = router;
