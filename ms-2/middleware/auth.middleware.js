const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
    const token = req.headers.authorization?.split("")[1];

    if (!token) return res.status(401).json({
        message:"No token provided"
    })

    try{
        const decoded = jwt.verify(
            token,
            "121121"
         );
         req.user = decoded;
         next();
    }catch(error){
        res.status(403).json({
            message:"Invalid Token"
        });
    }

}