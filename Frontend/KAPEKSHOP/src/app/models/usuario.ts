export class Usuario{
    _id?: number;
    NombreCompleto:string;
    correo:string;
    contrasenia:string;
    direccion:string;
    departamento:string;

    constructor(NombreCompleto: string,  correo:string, contrasenia:string, direccion:string, departamento:string){
        this.NombreCompleto=NombreCompleto;
        this.correo=correo;
        this.contrasenia=contrasenia;
        this.direccion=direccion;
        this.departamento=departamento;
    }



}