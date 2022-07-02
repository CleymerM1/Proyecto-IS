const express = require('express');
const app = express();
const dotenv=require('dotenv');
dotenv.config();
const cors = require('cors')

// Configurar CORS
const whiteList = [process.env.FRONTEND_URL]
const corsOptions = {
    origin: function(origin, callback ) {
        if(whiteList.includes(origin)){
            // Puede consultar la API
            callback(null, true)
        }else {
            // No esta permitido
            callback( new Error('Error de CORS'))
        }
    }
}


//rutas
app.use(cors(corsOptions))
app.use(express.json());
//Usuario
app.use('/usuario', require('./routes/usuario'))
//Producto
app.use('/producto', require('./routes/producto'))
//Categoria
app.use('/categoria', require('./routes/categoria'))


const port= (process.env.port || 3000);

//iniciar servidor
app.listen(port,()=>{
    console.log('Dentro'+ port);
});
