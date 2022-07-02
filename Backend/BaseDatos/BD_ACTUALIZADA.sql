

CREATE DATABASE Pagina_Web;
USE Pagina_Web;

CREATE TABLE privilegios (idPrivilegio INT PRIMARY KEY AUTO_INCREMENT, visualizar BOOLEAN, agregar BOOLEAN, editar BOOLEAN,  eliminar BOOLEAN );

CREATE TABLE categoria (idCategoria INT PRIMARY KEY AUTO_INCREMENT, nombreCategoria VARCHAR(50), descripcion VARCHAR(50));

CREATE TABLE producto(idProducto INT auto_increment,idCategoria INT, nombre VARCHAR(50), costo INT,
estado VARCHAR(50), descripcion VARCHAR(50), descuento INT,
primary key (idProducto, idCategoria),
FOREIGN KEY (idCategoria) REFERENCES categoria(idCategoria));

CREATE TABLE foto(idFoto int auto_increment, idProducto int, descripcion varchar(150), foreign key (idProducto) references producto(idProducto));


CREATE TABLE rol(idRol INT AUTO_INCREMENT, idPrivilegio INT,nombreRol VARCHAR(50), estado VARCHAR(50),
primary key (idRol),
FOREIGN KEY (idPrivilegio) REFERENCES privilegios(idPrivilegio));

CREATE TABLE usuario(idUsuario INT auto_increment,idRol INT, nombre VARCHAR(50), apellido VARCHAR(50), correo VARCHAR (50), direccion VARCHAR(50),
departamento VARCHAR(50), contrasenia VARCHAR(50), estado VARCHAR(50), telefono varchar(50),
primary key (idUsuario, idRol),
FOREIGN KEY (idRol) REFERENCES rol(idRol));

-------------------------------------27/06/2022--------------------------------------------------------
CREATE TABLE puntaje(idPuntaje INT auto_increment, idUsuario INT, idProducto INT, puntaje FLOAT, comentario varchar(500) default null
PRIMARY KEY (idPuntaje),
FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
FOREIGN Key (idProducto) REFERENCES producto(idProducto));
----------------------------------para directorio de las fotos------------------------------------
--ALTER TABLE producto MODIFY foto varchar(250);
ALTER TABLE usuario MODIFY contrasenia blob;
ALTER TABLE usuario ADD COLUMN token text;
ALTER TABLE usuario ADD confirmado ENUM('1','0') DEFAULT '0';

----------------------------------------Nuevo 1/7/2022--------------------------------------------
--------TABLA de Usuario y Productos----------
CREATE TABLE usuarioProducto(idUsuario INT, idProducto INT, tipoLista VARCHAR(50),
FOREIGN KEY(idUsuario) REFERENCES usuario(idUsuario),
FOREIGN KEY(idProducto) REFERENCES producto(idProducto));
--------Tabla para los puntajes de los productos------------
CREATE TABLE puntajeProductos(idUsuario INT, idProducto INT, idPuntaje INT,
FOREIGN KEY(idUsuario) REFERENCES usuario(idUsuario),
FOREIGN KEY(idProducto) REFERENCES producto(idProducto),
FOREIGN KEY(idPuntaje) REFERENCES puntaje(idPuntaje));

-------Tabla para usaurios y categorias a las que se suscriben-------------
CREATE TABLE usuarioCategoria(idUsuario INT, idCategoria INT, 
FOREIGN KEY(idUsuario) REFERENCES usuario(idUsuario),
FOREIGN KEY(idCategoria) REFERENCES categoria(idCategoria));
