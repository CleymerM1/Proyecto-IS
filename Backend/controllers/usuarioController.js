const conexion = require('../config/conexion');
const Usuario = require('../models/usuario');
var jwt = require('jsonwebtoken');

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

exports.obtenerUsuarioPorCorreo = (req,res)=>{
    Usuario.obtenerPorCorreo(req, (error,data) => {
        if(error){
            res.status(404).json({mensaje: 'No se pudo obtener el usuario'})
        }else{
            
            res.status(200).json(data[0]);
        }
    });
};

exports.validarTokenRegistro = (req, res) => {
    Usuario.validarTokenRegistro( req, (err, data) => {
        if(err){
            return res.status(500).json({msj: 'Token no válido'})
        }
        if(data.length) {
            return res.status(200).json({msj: 'Correo verificado correctamente'})
        }
        return res.status(500).json({msj: 'Ocurrio un error'})
    }) 
};

exports.inicioSesion = (req, res) => {
    Usuario.iniciarSesion( req, (error, data) => {
        if(error) {
            // No se puede iniciar sesion
            console.log(error)
            return res.status(500).send('Error al iniciar sesión')
        }
        if(data){
            // id, correo
            if(data.length){

                
                let token = jwt.sign({correo: data[0].correo, idUsuario: data[0].idUsuario},process.env.JWT_SECRET, {
                    expiresIn: '3h'
                })
                return res.status(200).json({token: token})
            }else {
                return res.status(500).json({msj: 'Error, correo o contraseña incorrectos'})

            }
                    
        }
        
    })
};


