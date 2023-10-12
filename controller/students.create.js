var db = require('../utils/db.tables');
var stds = db.std;

const createStudents = async (req, res)=>{
    try{
        const {firstname, lastname, address, phone} = req.body;
        console.log(req.body);

        await stds.create({
            firstname: firstname,
            lastname: lastname,
            address: address,
            phone: phone 
        }).then((result)=>{
            res.status(200).send(result);
        });

    }catch(error){
        console.error(error.stack);
    }
}
module.exports = {createStudents}