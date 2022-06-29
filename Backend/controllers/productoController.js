const conexion = require('../config/conexion');
const Producto = require('../models/producto');

/*---------------Crear Producto---------------*/
exports.crearProducto = (req,res)=>{
    console.log(req.body);
    const producto = new Producto({
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        costo: req.body.costo,
        foto: req.body.foto,
        estado: req.body.estado,
        descripcion: req.body.descripcion,
        descuento: req.body.descuento
    })
/*----Llamdo de la funcion crear en models----*/
    Producto.crear(producto, (err, data)=>{
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
            return res.status(200).json({msj:'El producto se registro correctamente'})
        }
    })    
};
/*--------Obtener Todos los Productos--------*/
exports.obtenerProductos = (req,res)=>{
    Producto.obtenerTodos((error,data)=>{
        if(error){
            res.status(404).json({mensaje: 'No se pudieron obtener los datos'})
        }else{
            res.status(200).json(data);
        }
    });
};
/*---------Obtener un solo producto----------*/
exports.obtenerProducto = (req, res) =>{
    Producto.obtenerUno(id, (error, data) =>{
        if(error){
            res.status(404).json({msj: 'Hubo un problema al obtener el producto' + error})
        }else{
            res.status(200).json(data)
        }
    })
}

