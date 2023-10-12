var db = require('../utils/db.tables');
var stds = db.std;

const createStudents = async (req, res)=>{
    try{
        // const {firstname, lastname, address, phone} = req.body;
        console.log(req.body);

    }catch(error){
        console.error(error.stack);
    }
}
module.exports = {createStudents}