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
    if(this.verificarCorreoUsuario(usuario.correo, res)){
        Usuario.crear(usuario, (err, data)=>{
            if(err){
                console.log(err)
                res.status(500).send({
                    mensaje: err.mensaje || "Error al guardar en la base de datos",
                    error: err
                });
    
            }
            //console.log(data);
        }) 
    }
    res.json('Correo existente');
    console.log('No se pudo agregar el usuario');
       
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

exports.verificarCorreoUsuario = (req,res)=>{
    
    Usuario.verificarCorreo(req,(error,data)=>{
        if(error){
            res.status(404).json({mensaje: 'No se pudieron obtener los datos'})
        }
        //console.log(res.json(data));
        //console.log(data);
        return data;
    });
};


