/*-------------------------------Import para la conexion con la base de datos------------------------------*/ 
const conexion = require('../config/conexion');
/*------------------------------------------Creacion de clases---------------------------------------------*/ 
const Producto = function(objProducto){
    this.nombre = objProducto.nombre;
    this.tipo = objProducto.tipo;
    this.costo = objProducto.costo;
    this.foto = objProducto.foto;
    this.estado = objProducto.estado;
    this.descripcion = objProducto.descripcion;
    this.descuento = objProducto.descuento;
};
/*---------------------------------------------Funciones---------------------------------------------------*/
/*--------Crear Producto---------*/
Producto.crear = (newObjProducto, res)=>{
    let insertQuery =   `insert into producto (idCategoria, nombre, tipo, costo, foto, estado, descripcion, descuento) 
                        VALUES (2, '${newObjProducto.nombre}', '${newObjProducto.tipo}', '${newObjProducto.costo}',
                        '${newObjProducto.foto}','${newObjProducto.estado}','${newObjProducto.descripcion}','activado','${newObjProducto.descuento}')`;

    conexion.query(insertQuery, (err, resRegistrarProducto) => {
        if (err) return res({msj: 'El producto no pudo ser registrado'+err}, null)
        
        return res(null,{msj: 'El producto fue registrado correctamente'})
    })
};
/*-------Obtener Productos------*/
Producto.obtenerTodos = (resultado)=>{
    conexion.query("select * from producto", (err, rows)=>{
        if(err) throw err;
        resultado(null, rows);
    });
};
/*--------Obtener Producto------*/
Producto.obtenerUno = (resultado, res) => {
let searchQuery = `select * from producto where idProducto = '${resultado}`
    conexion.query(searchQuery, (err, rows) => {
        if(err) return res({msj: 'Hubo un error' + err}, null);

        return res(null, rows);
    })
}

module.exports = Producto;