const conexion = require('../config/conexion');
const Usuario = require('../models/usuario');


exports.crearUsuario = (req,res)=>{
    console.log(req.body);

    const usuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        direccion: req.body.direccion,
        departamento: req.body.departamento,
        contraseña: req.body.contraseña,
        telefono: req.body.telefono
    })


    Usuario.crear(usuario, (err, data)=>{
        if(err){

            return res.status(500).send({
                mensaje: err.mensaje || "Error al guardar en la base de datos",
                error: err
            });
        }

        if(data.error){
            console.log(data)
            return res.status(502).send({msj: data.error})
        }else{
            return res.status(200).json({msj:'El usuario se registro correctamente'})

        }
    })    
};

exports.obtenerUsuario = (req,res)=>{
    Usuario.obtener((error,data)=>{
        if(error){
            res.status(404).json({mensaje: 'No se pudieron obtener los datos'})
        }else{
            res.status(200).json(data);
        }
    });
};


