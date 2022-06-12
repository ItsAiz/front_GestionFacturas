import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';
import { Producto } from '../Modelo/Producto';
import { Factura } from '../Modelo/Factura';
import { Detalle } from '../Modelo/Detalle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  // urls cliente
  UrlCliente = 'http://localhost:8080/clientes';

  //urls procucto
  UrlProducto = 'http://localhost:8080/productos';

   //urls factura
   UrlFactura= 'http://localhost:8080/facturas';

   //urls detalle
   UrlDetalle = 'http://localhost:8080/detalles';

  //metodos cliente
  getClientes(){
      return this.http.get<Cliente[]>(this.UrlCliente+'/listarCliente');
  }
  saveCliente(cliente:Cliente){
      return this.http.post(this.UrlCliente+'/guardarCliente',cliente);
  }
  getCliente(id:number){
    return this.http.get<Cliente>(this.UrlCliente+'/obtenerCliente/'+id);
  }
 //metodos Producto
  getProductos(){
    return this.http.get<Producto[]>(this.UrlProducto+'/listarProducto');
  }
  saveProducto(producto:Producto){
    return this.http.post(this.UrlProducto+'/guardarProducto',producto);
  } 
  getProducto(id:number){
    return this.http.get<Producto>(this.UrlProducto+'/obtenerProducto/'+id);
  }
  deleteProducto(id:number){
      this.http.delete(this.UrlProducto+'/eliminar/'+id);
  }
  //metodos Factura
  getFacturas(){
    return this.http.get<Factura[]>(this.UrlFactura+'/listarFactura');
  }
  saveFactura(factura:Factura){
    return this.http.post(this.UrlFactura+'/guardarFactura',factura);
  } 
  getFactura(id:number){
    return this.http.get<Factura>(this.UrlFactura+'/obtenerFactura/'+id);
  }
  //metodos Detalle
  getDetalles(){
    return this.http.get<Detalle[]>(this.UrlDetalle+'/listarDetalle');
  }
  saveDetalle(detalle:Detalle){
    return this.http.post(this.UrlDetalle+'/guardarDetalle',detalle);
  } 
  getDetalle(id:number):Observable<any>{
    return this.http.get<Detalle>(this.UrlDetalle+'/obtenerDetalle/'+id);
  }
  
}
