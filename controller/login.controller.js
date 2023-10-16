const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = 'mySecret';
const db = require('../utils/db.tables');
const dbLogin = db.std;

const loginStudent = async (req, res)=>{
    try{
        const {email, password} = req.body;

        const studentEmail = await dbLogin.findOne({
            where:{email}
        });
        if(!studentEmail){
            return res.status(404).json({Message: 'please insert valid email'});
        }
        const comparePassword = await bcrypt.compare(password, studentEmail.password);
        if(!comparePassword){
            return res.status(404).json({Message: 'please insert valid password'});
        }

        const token = jwt.sign({email:studentEmail.email}, secretKey, {expiresIn : '300s'} );

        res.status(201).send({
            accessToken : token
        });

    }catch(error){
        res.status(400).send('Caught Error');
    }
}

module.exports = {
    loginStudent
}