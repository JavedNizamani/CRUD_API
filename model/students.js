module.exports = (sequelize, Sequelize)=>{

    const Students = sequelize.define('students',{
        firstname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        sequelize,
        tableName: 'students',
        timestamps: false
    });
    return Students;
}