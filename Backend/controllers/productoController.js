const Producto = require('../models/producto');

/*---------------Crear Producto---------------*/
exports.crearProducto = (req,res)=>{
    if(!req.body){
        return res.status(400).send({msj: 'Error del cliente'})
    }
    console.log(req.body);
    const producto = new Producto({
        categoria: req.body.categoria,
        nombre: req.body.nombre,
        costo: req.body.costo,
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
    Producto.obtenerTodos((err, data) => {
        if(err)
            return res.status(500-599).send({msj: err.msj || 'Error al buscar en la base d datos'})
        else
            return res.send(data)
    })
};

/*---------Obtener un solo producto----------*/
exports.obtenerProducto = (req, res) =>{
    let id = req.params.id
    if(!id)
        return res.status(400-499).send({msj: 'Error del cliente'})
    else
        Producto.obtenerPorId(id, (err, data) => {
            if(err)
                return res.status(500-599).send({msj: `Error encontrando el producto con el id = '${id}'`})
            else
                res.send(data)
        })
}

/*-------------Actualizar por id-------------*/
exports.actualizarProducto = (req, res) => {
    let id = req.params.id
    if(!id)
        return res.status(400-499).send({msj: 'Error del cliente'})
    else
        Producto.actualizarPorId(id, (err, data) => {
            if(err)
                return res.status(500-599).send({msj: `Error encontrando el producto con el id = '${id}' para actualizarlo`})
            else
                res.send(data)
        })
}

/*--------------Eliminar por id--------------*/
exports.eliminarProducto = (req, res) => {
    let id = req.params.id
        if(!id)
            return res.status(400-499).send({msj: 'Error del cliente'})
        else
            Producto.eliminarPorId(id, (err, data) => {
                if(err)
                    return res.status(500-599).send({msj: `Error al eliminar el producto con el id = '${id}'`})
                else
                    res.send(data)
            })
}

/*---------Eliminar todos por usuario--------
exports.eliminarTodoPorUsuario = (req, res) => {
    Producto.eliminarTodosPorUsuario((err, data) => {})
}*/