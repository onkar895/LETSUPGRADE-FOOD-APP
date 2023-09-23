import User from '../Schema/userSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Partner from '../Schema/partnerSchema.js'

   
         const hashpass = async(pass)=>{
           return  await bcrypt.hash(pass,10)
         }
         const comparePass = async(pass,databasePass)=>{
            return await bcrypt.compare(pass,databasePass)
         }

         const SECRET_KEY='thisismysecretkey';


export const addUser = async(req,res) => {
        
    try {
        const {name, email, password,image} = req.body;
        const user = await User.findOne({email})

        if(user){
           return res.json({error:'The user already exists'})
        }
        else if(!password || password.length <6){
            return res.json({warning:"Password must be greater than 5 characters"})
        }
        
            const hashPassword = await hashpass(password);
       
            const newUser = new User({name, email, password:hashPassword})
            await newUser.save();
            return res.status(201).json({success:"User registered successfully"})
        
        
    } 
    catch (error) 
    {
        res.status(501).json('error while calling the adduser API')   
    }
}

export const userlogin =async(req,res) => {
    try {
        const {email,password} = req.body;
    const user = await User.findOne({email})

        if(!email){
            return res.json({error:"Please enter your email"})
        }
        else if(email.length<5){
              return res.json({error:"please enter your correct email"})
        }
        else if(!user){
            return res.json({error:"user doesn't exist"})

        }

        else {
                 if(!email){
                   return  res.json({warning:'Please enter your email'})
                 }
      
                 else if( !password || password<6){
                   return res.json({warning:"Password must be more than 5 characters"})
        }
         const isValid = await comparePass(password,user.password);
         if(!isValid){
            return res.json({warning:"Password is incorrect"})
         }
         
         else{
            const token = jwt.sign({email:user.email, id:user._id,role:user.role},SECRET_KEY,{expiresIn:"5d"})
            return res.json({success:"Logged in Successfully", token:token,userId:user._id,email:user.email,name:user.name,role:user.role})
         }
        }
        
    } catch (error) {
        console.log(error)
        res.json("error while logging in",error)

        
    }

}


export const addpartner = async(req, res) => {
    try {
        const { name, email,image, password,landmark,address,categories,origin } = req.body;
        console.log(req.body);
        const partner = await Partner.findOne({ email });
        

        if (partner) {
            return res.json({ error: 'The user already exists' });
        } else if (!name || !image || !landmark || !categories || !origin || !address ) {
            return res.json({ warning: 'Please Fill all the fields' });
        } 
          else if(!email){
            return res.json({warning:'Email can not be empty'})
          }else if (!password || password.length < 6) {
            return res.json({ warning: 'Password must be greater than 5 characters' });
        } else {
            const securepassword = await hashpass(password);
            const newPartner = new Partner({ name, email,image,address,landmark,origin,categories, password: securepassword });

            await newPartner.save();
            return res.status(200).json({ success: 'Partner added successfully' });
        }
    } catch (error) {
        res.status(500).json('Error while calling the add partner API', error);
    }
};


export const loginPartner =async(req,res)=>{
   
   
    try {
        const {email,password} = req.body;
        
         const partner =await Partner.findOne({email})
         

         if(!partner){
           return res.json({error:"The user doesn't exist"})
         }
         else {
            if(!email)
            {
             return res.json({warning:"Please enter your email"})
            }
            else if(!password || password.length<6){
                  return res.json({warning:"The password must be greater than 5 characters"})
            }
         }
        
         const isValid= await comparePass(password,partner.password)
                if(!isValid){
                  return res.json({warning:'Your password is incorrect'})
                }
                else{
       
                   const token = jwt.sign({email:partner.email, id:partner._id,role:partner.role},SECRET_KEY,{expiresIn:"5d"})
                    return res.json({success:"Logged in successfully",name:partner.name,email:partner.email,token:token,id:partner._id,role:partner.role})
                }

    } catch (error) {
        res.json("error while calling the Login Partner API",error)
        
    }
}

export const verifyUserlogin =async(req,res)=>{
    try {

        await res.json({message: "Verified User"})
        
    } catch (error) {
        res.json("error while calling the Verify user details api")
    }
}
export const verify =async(req,res,next) => {

    try {
        const token = req.cookies.access_token
    if(!token){
        return res.json({error:"token not found"})
    }

    else{
        jwt.verify(token,SECRET_KEY,(err)=>{
            if (err) {
            return res.json({error:'Error in token'});
            
        }
        else{
            next();
        }
    })
        
    }
    } catch (error) {
        res.json({error:error.message,message:'Error while verifying the Token'})
        
    }
}
