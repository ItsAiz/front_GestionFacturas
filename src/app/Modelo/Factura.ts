import { Cliente } from "./Cliente";

export class Factura{
    id_factura:number;
    cliente:Cliente;
    fecha:Date;
    constructor(id_factura:number,cliente:Cliente,fecha:Date){
            this.id_factura = id_factura;
            this.cliente = cliente;
            this.fecha = fecha;
    }
}