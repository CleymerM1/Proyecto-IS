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
Producto.crear = (newObjProducto, res)=>{
    let buscarIdcategoria = `select idCategoria from categoria where nombreCategoria = '${newObjProducto.categoria}'`
    conexion.query(buscarIdcategoria, (error, resIdcategoria)=>{
        if(error){
            return res(error, null)
        }
        if(resIdcategoria.length) {
            let idcat = Object.values(JSON.parse(JSON.stringify(resIdcategoria[0])))
            //console.log(idcat)
            let insertQuery =   `insert into producto (idCategoria, nombre, costo, estado, descripcion, descuento) 
                        VALUES ('${idcat}', '${newObjProducto.nombre}', '${newObjProducto.costo}',
                        '${newObjProducto.estado}','${newObjProducto.descripcion}','${newObjProducto.descuento}')`;
            conexion.query(insertQuery,(err, resRegistrarProducto)=>{
                if (err) return res({msj: 'El producto no pudo ser registrado'+err}, null)
        
                return res(null,{msj: 'El producto fue registrado correctamente'})
            })
        }      
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
