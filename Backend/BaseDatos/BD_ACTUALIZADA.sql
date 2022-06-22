

CREATE DATABASE Pagina_Web;
USE Pagina_Web;

CREATE TABLE privilegios (idPrivilegio INT PRIMARY KEY AUTO_INCREMENT, visualizar BOOLEAN, agregar BOOLEAN, editar BOOLEAN,  eliminar BOOLEAN );

CREATE TABLE categoria (idCategoria INT PRIMARY KEY AUTO_INCREMENT, nombreCategoria VARCHAR(50), descripcion VARCHAR(50));

CREATE TABLE producto(idProducto INT auto_increment,idCategoria INT, nombre VARCHAR(50), tipo VARCHAR(50), costo INT, foto varchar(50),
estado VARCHAR(50), descripcion VARCHAR(50), descuento INT,
primary key (idProducto, idCategoria),
FOREIGN KEY (idCategoria) REFERENCES categoria(idCategoria));

CREATE TABLE rol(idRol INT AUTO_INCREMENT, idPrivilegio INT,nombreRol VARCHAR(50), estado VARCHAR(50),
primary key (idRol),
FOREIGN KEY (idPrivilegio) REFERENCES privilegios(idPrivilegio));

CREATE TABLE usuario(idUsuario INT auto_increment,idRol INT, nombre VARCHAR(50), apellido VARCHAR(50), correo VARCHAR (50), direccion VARCHAR(50),
departamento VARCHAR(50), contrasenia VARCHAR(50), estado VARCHAR(50), telefono varchar(50),
primary key (idUsuario, idRol),
FOREIGN KEY (idRol) REFERENCES rol(idRol));




