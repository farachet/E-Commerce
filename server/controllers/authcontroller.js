const {user}= require('../database/controllers')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


module.exports={
    Register: (req,res)=>{
        const {firstName,lastName,email,password,image,birthday,role}=req.body
        bcrypt.hash(password,8)

        .then((hash)=>{
            console.log("password" , hash)
        user.create({firstName,
            lastName,
            email,
            password:hash,
            image,
            birthday,
            role}).
                then(()=>{
                return res.status(201).json("User registered successfuly")
            }).catch(err=>{
                    res.status(500).json({error:err}) 
            })
        })
        if ( !req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password ||  !req.body.image || !req.body.birthday || !req.body.role){
            return res.status(422).json({errr:"Please filled the field property"});
        }
    },

 
    Login: async(req,res)=>{
                const {email,password}=req.body;
                try{
                    const existUser = await user.findOne({where:{email:email}});
                    if (!existUser){
                    return res.status(500).json("No user found !")
                } 
                else {
                    console.log( "bcrypt" , bcrypt.compare)
                const passwordMatch = await bcrypt.compare(password,existUser.password)
                console.log("password", password)
                console.log("password USER", existUser.password)
                console.log("password match", passwordMatch)
                
                if(!passwordMatch){
                    return res.status(401).json('The password is wrong !')
                } 
            
                else {
                    
        const secretKey="ykndhd"
      
        const acsessToken =jwt.sign({
            email:req.body.email,
            password:req.body.password,
            role:req.body.role
           }, secretKey, { expiresIn: '12h', algorithm: 'HS256' }) 
          existUser.token=acsessToken
        
          const options ={
        expires :new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true
          }
          console.log(acsessToken,"acsessToken");
          res.status(201).json({acsessToken})
                 }
            }
        }
        catch (error){
            console.log(error);
            res.status(500).json("there is an error")
        }
    
    }
 

}

  