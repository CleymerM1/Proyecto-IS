/*-------------------------------Import para la conexion con la base de datos------------------------------*/ 
const conexion = require('../config/conexion');

/*------------------------------------------Creacion de clases---------------------------------------------*/ 
const Producto = function(objProducto){
    this.categoria = objProducto.categoria;
    this.nombre = objProducto.nombre;
    this.costo = objProducto.costo;
    this.estado = objProducto.estado;
    this.descripcion = objProducto.descripcion;
    this.descuento = objProducto.descuento;
};

/*---------------------------------------------Funciones---------------------------------------------------*/
/*--------Crear Producto---------*/
Producto.crear = (newObjProducto, resultado)=>{
    let buscarIdcategoria = `select idCategoria from categoria where nombreCategoria = '${newObjProducto.categoria}'`
    conexion.query(buscarIdcategoria, (error, resIdcategoria)=>{
        if(error){
            return resultado(error, null)
        }
        if(resIdcategoria.length) {
            let idcat = Object.values(JSON.parse(JSON.stringify(resIdcategoria[0])))
            //console.log(idcat)
            let insertQuery =   `insert into producto (idCategoria, nombre, costo, estado, descripcion, descuento) 
                        VALUES ('${idcat}', '${newObjProducto.nombre}', '${newObjProducto.costo}',
                        '${newObjProducto.estado}','${newObjProducto.descripcion}','${newObjProducto.descuento}')`;
            conexion.query(insertQuery,(err, resRegistrarProducto)=>{
                if (err) return resultado({msj: 'El producto no pudo ser registrado'+err}, null)
        
                return resultado(null,{msj: 'El producto fue registrado correctamente'})
            })
        }      
    }) 
};

/*-------Obtener Productos------*/
Producto.obtenerTodos = (resultado)=>{
    conexion.query("select * from producto", (err, res)=>{
        if(err) throw err;
        resultado(null, res);
    });
};

/*--------Obtener Producto------*/
Producto.obtenerPorId = (id, resultado) => {
let obtenerQuery = `select * from producto where idProducto = '${id}`
    conexion.query(obtenerQuery, (err, res) => {
        if(err) 
            return resultado({msj: 'Hubo un error' + err}, null)
        else if(res.length)
            return resultado(null, res[0])
        else
            return resultado({msj: 'Producto no encontrado'}, null)
    })
}

/*-------Actualizar por id------*/
Producto.actualizarPorId = (id, newObjProducto, resultado) => {
    let actualizarQuery =   `UPDATE producto SET idCategoria = '${newObjProducto.categoria}', nombre = '${newObjProducto.nombre}', 
                            costo = '${newObjProducto.costo}', estado = '${newObjProducto.estado}', descripcion = '${newObjProducto.descripcion}', 
                            descuento = '${newObjProducto.descuento}' WHERE idProducto = '${id}'`
    conexion.query(actualizarQuery, (err, res) => {
        if(err)
            return resultado({msj: `Hubo un error '${err}'`}, null)
/*changedRows consigue el numero de filas que hayan sido cambiadas en sus valores en un UPDATE de la base de datos*/
            else if(res.changedRows == 0)
            return resultado({msj: 'No hubo cambios'}, null)
        else
            return resultado(null, {msj: 'Producto actualizado'})
    })
}

/*-----Eliminar un producto-----*/
Producto.eliminarPorId = (id, resultado) => {
    let eliminarQuery = `DELETE FROM producto WHERE idProducto = '${id}'`
    conexion.query(eliminarQuery, (err, res) => {
        if(err)
            return resultado({msj: `Hubo un error '${err}'`}, null)
/*affectedRows consigue el numero de filas afectadas en un INSERT, UPDATE o DELETE de la base de datos*/
        else if(res.affectedRows == 0)
            return resultado({msj: 'No se elimino ningun producto'}, null)
        else
            /*return resultado(null, res)*/
            return resultado(null, {msj: 'Producto eliminado'})
    })
}

/*Eliminar todos los productos(debe cambiarse con respecto al usuario)*/
Producto.eliminar = (resultado) => {
    let eliminarQuery = 'DELETE FROM producto'
    conexion.query(eliminarQuery, (err, res) => {
        if(err)
            return resultado({msj: `Hubo un error '${err}'`}, null)
        else if(res.affectedRows == 0)
            return resultado({msj: 'No se elimino ningun producto'}, null)
        else
            return resultado(null, {msj: `Numero de productos eliminados '${res.affectedRows}'`})
    })
}

module.exports = Producto;
