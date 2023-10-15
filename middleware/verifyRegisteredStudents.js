const db = require('../utils/db.tables')
const dbStudents = db.std;

const verifyRegisteredStudents = async(req, res, next)=>{
    try{
        const {email, phone} = req.body;
            const emailAlreadyExists = await dbStudents.findOne({
                where:{email}
            });
            const phoneAlreadyExists = await dbStudents.findOne({
                where:{phone}
            });
            if(emailAlreadyExists){
                res.status(400).json({message: `Email : ${email}  : Already Exists`});
            }else if(phoneAlreadyExists){
                res.status(400).json({message: `Phone No. : ${phone}   Already Exists`});
            }else{
                next();
            }
    }catch(error){
        res.status(400).json({Message:"Caught Error"});
    }
}

module.exports = {
    verifyRegisteredStudents
}