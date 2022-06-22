const express =require('express');
const app = express();
const dotenv=require('dotenv');
dotenv.config();
const conexion = require('./config/conexion');

//rutas
app.use(express.json());
app.use('/usuario/registro', require('./routes/usuario'))



const port= (process.env.port || 3000);

//iniciar servidor
app.listen(port,()=>{
    console.log('Dentro'+ port);
});
