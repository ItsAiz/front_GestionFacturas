export class Cliente{
    id_cliente:number;
    nombre:String;
    apellido:String;
    direccion:String;
    fecha_nacimiento:Date;
    telefono:number;
    email:String;
    constructor(id_cliente:number,nombre:String,apellido:String,direccion:String,fecha_nacimiento:Date, telefono:number,email:String){
        this.id_cliente = id_cliente;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.fecha_nacimiento = fecha_nacimiento;
        this.telefono = telefono;
        this.email = email;
    }
}