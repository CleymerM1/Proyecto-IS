
const dotenv=require('dotenv')
const express =require('express');
const port= (process.env.port || 3000);

dotenv.config()
require('./config/conexion');
console.log(process.env.DB_USER)
//llamar al express
const app=express();

//configurar el puerto
app.set('port',port)

//routing

app.get('/', (req, res) => {
    res.json({ message: "Bienvenido a KAPEK_SHOP" })
  })

app.use('/api',require('./rutas'))

//iniciar el express 
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('Error al iniciar el servidor: '+error)
    }
    else{
        console.log('Servidor iniciado en el puerto:'+ port)
    }
});