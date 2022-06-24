
const conexion = require('../config/conexion');
const Usuario = function(objUsuario){
    this.nombre = objUsuario.nombre;
    this.apellido = objUsuario.apellido;
    this.correo = objUsuario.correo;
    this.direccion = objUsuario.direccion;
    this.departamento = objUsuario.departamento;
    this.contraseña = objUsuario.contraseña;
    this.telefono = objUsuario.telefono;
};

Usuario.crear = (newObjUsuario, res)=>{
    let buscarCorreo = `select correo from usuario where correo='${newObjUsuario.correo}'`
    let insertQuery = `insert into usuario (idRol, nombre, apellido, correo, direccion, departamento, contrasenia, estado, telefono) VALUES (2, '${newObjUsuario.nombre}', '${newObjUsuario.apellido}', '${newObjUsuario.correo}','${newObjUsuario.direccion}','${newObjUsuario.departamento}','${newObjUsuario.contraseña}','activado','${newObjUsuario.telefono}')`;

    conexion.query(buscarCorreo, (err, resUsuario)=>{
        if(err){
            return res(err, null)
        }

        if(resUsuario.length) {
            return res(null, {error: 'El correo ya esta en uso', tipo: 'no_permitido'})
        }else {
            conexion.query(insertQuery, (err, resRegistrarUsuario) => {
                
                if (err) return res({msj: 'El usuario no pudo ser registrado'}, null)

                return res(null,{msj: 'El usuario fue registrado correctamente'})
            })
        }
    });
};


Usuario.obtener = (resultado)=>{
    conexion.query("select * from usuario", (err, rows)=>{
        if(err) throw err;
        resultado(null, rows);

    });
};





module.exports = Usuario;
