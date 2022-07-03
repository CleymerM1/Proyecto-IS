const Categoria = require('../models/categoria');

/*----------Crear Categoria----------*/
exports.crearCategoria = (req, res) => {
    if(!req.body){
        return res.status(400-499).send({msj: 'Error del cliente'})
    }
    const categoria = new Categoria({
        nombreCategoria: req.body.nombreCategoria,
        descripcion: req.body.descripcion
    })
    Categoria.crear(categoria, (err, data) => {
        if(err){
            return res.status(500).send({
                mensaje: err.mensaje || "Error al guardar en la base de datos",
                error: err
            });
        }
        if(data.error){
            return res.status(502).send({msj: data.error})
        }else{
            return res.status(200).json({msj:'La categoria se registro correctamente'})
        }
    })
}

/*----Obtener todas las categorias---*/
exports.obtenerCategorias = (req, res) => {
    Categoria.obtenerTodos((err, data) => {
        if(err)
            return res.status(500-599).send({msj: err.msj || 'Error al buscar en la base d datos'})
        else
            return res.send(data)
    })
}

/*-----Obtener una sola categoria----*/
exports.obtenerCategoria = (req, res) => {
    let idC = req.params.idC
    if(!idC)
        return res.status(400-499).send({msj: 'Error del cliente'})
    else
        Categoria.obtenerPorId(idC, (err, data) => {
            if(err)
                return res.status(500-599).send({msj: err.msj || 'Error al buscar en la base d datos'})
            else
                return res.send(data)
        })
}

/*---------Actualizar por id---------*/
exports.actualizarCategoria = (req, res) => {
    let idC = req.params.idC
    if(!idC)
        return res.status(400-499).send({msj: 'Error del cliente'})
    else
        Categoria.actualizarPorId(idC, (err, data) => {
            if(err)
                return res.status(500-599).send({msj: err.msj || 'Error al buscar en la base d datos'})
            else
                return res.send(data)
        })
}

/*----------Eliminar por id----------*/
exports.eliminarCategoria = (req, res) => {
    let idC = req.params.idC
        if(!idC)
            return res.status(400-499).send({msj: 'Error del cliente'})
        else
            Producto.eliminarPorId(idC, (err, data) => {
                if(err)
                    return res.status(500-599).send({msj: `Error al eliminar la categoria con el id = '${id}', ${err}`})
                else
                    res.send(data)
            })
}

/*---Eliminar todas las categorias---*/
exports.eliminarCategorias = (req, res) => {
    Categoria.eliminarTodosPorUsuario((err, data) => {
        if(err)
            return res.status(500-599).send({msj: `Error al eliminar las categorias, ${err}`})
        else
            res.send(data)
    })
}