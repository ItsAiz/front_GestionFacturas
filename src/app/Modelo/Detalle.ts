import { Factura } from "./Factura";
import { Producto } from "./Producto";

export class Detalle{
    num_detalle: number;
    factura!:Factura;
    producto!:Producto;
    cantidad: number;
    precio: number;
}