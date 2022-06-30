/*-------------------------------Import para la conexion con la base de datos------------------------------*/ 
const conexion = require('../config/conexion');
const jwt = require('jsonwebtoken');
const correoServicio = require('../helpers/email.js')

/*------------------------------------------Creacion de clases---------------------------------------------*/ 
const Usuario = function(objUsuario){
    this.nombre = objUsuario.nombre;
    this.apellido = objUsuario.apellido;
    this.correo = objUsuario.correo;
    this.direccion = objUsuario.direccion;
    this.departamento = objUsuario.departamento;
    this.contraseña = objUsuario.contraseña;
    this.telefono = objUsuario.telefono;
};
/*---------------------------------------------Funciones---------------------------------------------------*/
Usuario.crear = (newObjUsuario, res)=>{
    let buscarCorreo = `select correo from usuario where correo='${newObjUsuario.correo}'`
    let token = jwt.sign({correo: newObjUsuario.correo},process.env.JWT_SECRET)
    //let insertQuery = `insert into usuario (idRol, nombre, apellido, correo, direccion, departamento, contrasenia, estado, telefono) VALUES (2, '${newObjUsuario.nombre}', '${newObjUsuario.apellido}', '${newObjUsuario.correo}','${newObjUsuario.direccion}','${newObjUsuario.departamento}','${newObjUsuario.contraseña}','activado','${newObjUsuario.telefono}')`;
    let insertQuery = `insert into usuario (idRol, nombre, apellido, correo, direccion, departamento, contrasenia, estado, telefono, token) VALUES (2, '${newObjUsuario.nombre}', '${newObjUsuario.apellido}', '${newObjUsuario.correo}','${newObjUsuario.direccion}','${newObjUsuario.departamento}',AES_ENCRYPT('${newObjUsuario.contraseña}','${newObjUsuario.contraseña}'),'activado','${newObjUsuario.telefono}', '${token}')`;

    conexion.query(buscarCorreo, (err, resUsuario)=>{

        if(err){
            return res(err, null)
        }

        if(resUsuario.length) {
            return res(null, {error: 'El correo ya esta en uso', tipo: 'no_permitido'})
        }else {

            

            conexion.query(insertQuery, async (err, resRegistrarUsuario) => {

                console.log(err)
                if (err) return res({msj: 'El usuario no pudo ser registrado'}, null)
                let data = {
                    correo: newObjUsuario.correo,
                    nombre: newObjUsuario.nombre,
                    token: token
                }

                // Enviar correo al usuario para verificar su cuenta
                try {
                    await correoServicio(data)
                    return res(null,{msj: 'Se envio un correo con las instrucciones para válidar tu cuenta.'})
                } catch (error) {
                    console.log(error)
                    return res({msj: 'No se pudo enviar el correo al usuario'},null)
                    // Borrar el usuario de la base de datos
                    
                }


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

Usuario.validarTokenRegistro = (req, resultado) => {
    let { token } = req.body
    console.log(req.body)
    let consulta = `SELECT * FROM usuario WHERE token = '${token}'`
    let consultaActualizarToken = `UPDATE usuario SET token = '' WHERE token= '${token}'`;
    conexion.query(consulta, (err, res) => {
        if (res.length) {
            // Borrar el token del usuario 
            conexion.query(consultaActualizarToken, (error, resp) => {
                if(error){
                    return resultado(err, null)
                }else {
                    return resultado(null, res)
                }
               
            })
        }else {
            return resultado(err, null)
        }
    })
};

Usuario.iniciarSeion = (resultado)=>{
    let consulta = `SELECT * FROM usuario where correo = '${req.body.correo}' and contrasenia = AES_ENCRYPT('${req.body.contrasenia}','${req.body.contrasenia}')`
    conexion.query(consulta, (err, resUsuario) => {
        if(err) return respuesta(err, null)
        

        return respuesta(null, resUsuario )
   
    } )
};

Usuario.obtenerPorCorreo = ( req, respuesta ) => {

    let correo = req.params ? req.params.correo : req
    let buscarCorreo = `select idUsuario, idRol, nombre, apellido, correo, direccion, departamento, estado, telefono from usuario where correo='${correo}'`
    conexion.query(buscarCorreo, (err, resUsuario) => {
        if(err) {
            return respuesta(err, null)
        }
        return respuesta(null, resUsuario)
    
    })
};




module.exports = Usuario;
