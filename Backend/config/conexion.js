const mysql = require('mysql');
const conexion=mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    database: process.env.DB_NAME
});
console.log(process.env.DB_USER)
conexion.connect((err)=>{
    if(err){
        console.log('ha ocurrido un error: '+err)
    }
    else{
        console.log('La base de datos se conectó correctamente.')
    }
});

module.exports=conexion;