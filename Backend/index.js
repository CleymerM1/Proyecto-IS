const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
require('./config/conexion');

//rutas
app.use(express.json());
app.use('/usuario/registro', require('./routes/usuario'))



const port= (process.env.port || 3000);

//iniciar servidor
app.listen(port,(error)=>{
    if(error){
        console.log('ha ocurrido un error: '+ error)
    }
    else{
        console.log('servidor iniciado en el puerto '+port)
    }
});
