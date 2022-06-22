
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
    
    let insertQuery = `insert into usuario (idRol, nombre, apellido, correo, direccion, departamento, contrasenia, estado, telefono) VALUES (2, '${newObjUsuario.nombre}', '${newObjUsuario.apellido}', '${newObjUsuario.correo}','${newObjUsuario.direccion}','${newObjUsuario.departamento}','${newObjUsuario.contraseña}','activado','${newObjUsuario.telefono}')`;
    conexion.query(insertQuery, (err, rows, fields)=>{
        if(err){
            console.log('Usuario no agregado');
        }
        else{
            console.log('Usuario agregado');
            //res.json({status: 'Usuario agregado'})
        }
    });
};

/*
Usuario.obtener = async function() {
    /*
    conexion.query("select * from usuario", (err,res)=>{
        if(err){
            content(null, err);
            return;
        }else{
            content(null,res);
        }
    });
    
   //var content=[];
   
   conexion.query("select * from usuario;", (err,rows)=>{
    if(err) throw err;
        let content = rows;
        console.log((content));
        
        return content;
   });
   
};*/

Usuario.obtener = (resultado)=>{
    conexion.query("select * from usuario", (err, rows)=>{
        if(err) throw err;
        resultado(null, rows);

    });
};

Usuario.verificarCorreo = (req, resultado)=>{
    conexion.query("select correo from usuario", (err,rows)=>{
        if(err) throw err;
        //resultado(null,rows);
        for(let i=0;i<rows.length;i++){
            if(req == rows[i]){
                resultado('Correo existente',false);
            }
        }
        resultado(null,true);
    });
    
}


module.exports = Usuario;