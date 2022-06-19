export class Usuario{
    _id?: number;
    nombre: string;
    apellido:string;
    correo:string;
    contrasenia:string;
    confirmarcontrasenia:string;
    direccion:string;
    departamento:string;

    constructor(nombre: string, apellido:string, correo:string, contrasenia:string,confirmarcontrasenia:string, direccion:string, departamento:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.correo=correo;
        this.contrasenia=contrasenia;
        this.confirmarcontrasenia=confirmarcontrasenia;
        this.direccion=direccion;
        this.departamento=departamento;
    }



}