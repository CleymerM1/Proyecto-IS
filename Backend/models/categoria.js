/*-------------------------------Import para la conexion con la base de datos------------------------------*/ 
const conexion = require('../config/conexion');

/*------------------------------------------Creacion de clases---------------------------------------------*/ 
const Categoria = function(objCategoria){
    this.nombreCategoria = objCategoria.nombreCategoria;
    this.descripcion = objCategoria.descripcion;
};

/*---------------------------------------------Funciones---------------------------------------------------*/
/*--------Crear Categoria---------*/
Categoria.crear = (newObjCategoria, resultado) => {
    let crearCat = `INSERT INTO categoria(nombreCategoria, descripcion) 
                    VALUES ('${newObjCategoria.nombreCategoria}', '${newObjCategoria.descripcion}')`
    conexion.query(crearCat, (err, res) => {
        if(err)
            return resultado({msj: `No se pudo registrar la categoria ${err}`}, null)
        else
            return resultado(null, {msj: 'Categoria registrada correctamente'})
    })
}

/*-------Obtener Categorias------*/
Categoria.obtenerTodos = (resultado) => {
    let obtenerQuery = 'SELECT * FROM categoria'
    conexion.query(obtenerQuery, (err, res) => {
        if(err)
            return resultado({msj: `Hubo un error ${err}`}, null)
        else
            return resultado(null, res)
    })
}

/*-------Obtener Categoria-------*/
Categoria.obtenerPorId = (id, resultado) => {
    let obtenerQuery = `SELECT * FROM categoria WHERE idCategoria = ${id}`
    conexion.query(obtenerQuery, (err, res) => {
        if(err)
            return resultado({msj: `Hubo un error ${err}`}, null)
        else
            return resultado(null, res)
    })
}

/*-------Actualizar por Id-------*/
Categoria.actualizarPorId = (id, newObjCategoria, resultado) => {
    let actualizarQuery =   `UPDATE categoria SET nombreCategoria = '${newObjCategoria.nombreCategoria}',
                            descripcion = '${newObjCategoria.descripcion}' WHERE idCategoria = ${id}`
    conexion.query(actualizarQuery, (err, res) => {
        if(err)
            return resultado({msj: `Hubo un error '${err}'`}, null)
        else if(res.changedRows == 0)
            return resultado({msj: 'No hubo cambios'}, null)
        else
            return resultado(null, {msj: 'Categoria actualizada'})
    })
}

/*------Eliminar por Id---------*/        
Categoria.eliminarPorId = (id, resultado) => {
    let eliminarQuery = `DELETE FROM producto WHERE idCategoria = ${id}`
    conexion.query(eliminarQuery, (err, res) => {
        if(err)
            return resultado({msj: `Hubo un error '${err}'`}, null)
        else if(res.affectedRows == 0)
            return resultado({msj: 'No se elimino ninguna categoria'}, null)
        else
            /*return resultado(null, res)*/
            return resultado(null, {msj: 'Categoria eliminada'})
    })
}

/*-Eliminar todas las categorias*/
Categoria.eliminarTodos = (resultado) => {
    let eliminarQuery = 'DELETE FROM categoria'
    conexion.query(eliminarQuery, (err, res) => {
        if(err)                                                                                   
            return resultado({msj: `Hubo un error '${err}'`}, null)                                                           
        else if(res.affectedRows == 0)                                                            
            return resultado({msj: 'No se elimino ninguna categoria'}, null)                                                                                    
        else                                                                                      
            return resultado(null, {msj: `Numero de categorias eliminadas '${res.affectedRows}'`})
    })
}

module.exports = Categoria