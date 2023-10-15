const db = require('../utils/db.tables');
var dbStudents = db.std;

const createStudentsInsert = async(req, res)=>{
    try{
            const {email, phone} = req.body;
            const emailAlreadyExists = await dbStudents.findOne({
                where:{email}
            });
            const phoneAlreadyExists = await dbStudents.findOne({
                where:{phone}
            });
            if(emailAlreadyExists){
                res.status(400).json({message: 'Email Already Exists'});
            }else if(phoneAlreadyExists){
                res.status(400).json({message: 'Phone Already Exists'});
            }else{
                    await dbStudents.create(req.body);
                    res.status(201).json({Message: 'Data Inserted Successfully'});
            }
    }catch(error){
        res.status(400).json({message:`Caught Error Please Check Your Program!`});
    }
}

    const readStudentsData = async (req, res)=>{
        try{
            const read = await dbStudents.findAll({});
            res.status(200).send(read);
        }catch(error){
            res.status(400).json({Message:'Caught Error Check Program'});
        }
    }

    const readStudentsById = async (req, res)=>{
        try{
            const readId = await dbStudents.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send(readId);
        }catch(error){
            res.status(400).json({Message: "Caught Error Check Program"});
        }
        
    }

    const updateStudentsById = async (req, res)=>{
        try{
            const {email, phone} = req.body;
            const emailAlreadyExists = await dbStudents.findOne({
                where:{email}
            });
            const phoneAlreadyExists = await dbStudents.findOne({
                where:{phone}
            });
            if(emailAlreadyExists){
                res.status(400).json({message: 'Email Already Exists'});
            }else if(phoneAlreadyExists){
                res.status(400).json({message: 'Phone Already Exists'});
            }else{
                const updateById = await dbStudents.update(req.body, {
                    where:{
                        id: req.params.id
                    }
                })
                res.status(201).json({Message: "Entry Updated Successfully"});
            }
    }catch(error){
        res.status(400).json({message:`Caught Error Please Check Your Program!`});
    }
}
    const deleteStudentsById = async(req, res)=>{
        try{
            const deleteStudents = await dbStudents.destroy({
                where:{
                    id: req.params.id
                }
            });
            res.status(201).json({Message: "Entry Deleted Successfully"});
        }catch(error){
            res.status(400).json({Message: "Caught Error in Your Program"});
        }
    }

module.exports = {
    createStudentsInsert,
    readStudentsData,
    readStudentsById,
    updateStudentsById,
    deleteStudentsById
}