import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/Modelo/Factura';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Detalle } from 'src/app/Modelo/Detalle';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  detalles:Detalle[];
  clientes:Cliente[];
  productos:Producto[];
  productoSelected: String = '';
  clienteSelected: String = '';
  cantidad : number;
  productId: number;
  clienteId: number;
  productoNuevo:Producto = {id_producto:0,nombre:'',precio:0, stock:0};
  clienteNuevo: Cliente ={id_cliente:0, nombre:'', apellido:'',direccion:'', fecha_nacimiento:new Date(''), telefono: 0,email:''};
  facturaNueva: Factura ={id_factura:3, cliente: this.clienteNuevo, fecha:new Date('')};
  detalleNuevo : Detalle = {num_detalle:4, factura:this.facturaNueva , producto:this.productoNuevo, cantidad:0, precio:0};
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listarDetalles();
    this.obtenerClientes();
    this.obtenerProductos();
  }
  listarDetalles(){
    this.service.getDetalles().subscribe(data=>{
      this.detalles = data;
    });
  }

  obtenerClientes(){
    this.service.getClientes().subscribe(data=>{
        this.clientes = data;
    });
  }
  obtenerProductos(){
    this.service.getProductos().subscribe(data=>{
        this.productos = data;
    });
  }
  obtenerIdProducto(event:any){
      this.productoSelected = event.target.value;
      this.productId =parseInt(this.productoSelected.charAt(0));
      this.obtenerProductoByID();
  }
  obtenerIdCliente(event:any){
    this.clienteSelected = event.target.value;
    this.clienteId =parseInt(this.clienteSelected.charAt(0));
    this.obtenerClienteByID();
  }
  obtenerClienteByID(){
      this.service.getCliente(this.clienteId).subscribe(data=>{
          this.clienteNuevo.id_cliente = data.id_cliente;
          this.clienteNuevo.nombre= data.nombre;
          this.clienteNuevo.apellido = data.apellido;
          this.clienteNuevo.direccion = data.direccion;
          this.clienteNuevo.fecha_nacimiento = data.fecha_nacimiento;
          this.clienteNuevo.telefono = data.telefono;
          this.clienteNuevo.email = data.email;
      });
  }
  refresh(): void { window.location.reload(); }
  obtenerProductoByID(){
    this.service.getProducto(this.productId).subscribe(data=>{
       this.productoNuevo.id_producto = data.id_producto;
       this.productoNuevo.nombre = data.nombre;
       this.productoNuevo.precio = data.precio;
       this.productoNuevo.stock = data.stock;
    });
  }
  Agregar(): void{
    let date:Date = new Date();
    this.facturaNueva.fecha = date;
    if(this.detalleNuevo.cantidad < this.productoNuevo.stock && this.detalleNuevo.cantidad>0){
      console.log('entro');
      this.service.deleteProducto(this.productId);
      this.productoNuevo.stock = this.productoNuevo.stock-this.detalleNuevo.cantidad;
      this.service.saveProducto(this.productoNuevo);
      this.detalleNuevo.precio = this.productoNuevo.precio*this.detalleNuevo.cantidad;
      console.log(this.facturaNueva);
      this.service.saveFactura(this.facturaNueva).subscribe(res=>{
        alert("Factura guardada con éxito");
      },
      err=> alert("Error de factura")
      );
      this.service.saveDetalle(this.detalleNuevo).subscribe(res=>{
        alert("Detalle guardado con éxito");
      },
      err=> alert("Error de detalle")
      );
      this.refresh();
    }else{
      alert("error cantidad en stock insuficiente o cantidad indicada errada");
    }
  }


}



