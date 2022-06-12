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
  facturaNueva: Factura ={id_factura:0, this.clienteNuevo, fecha:new Date('')};
  detalleNuevo : Detalle = {num_detalle:0, this.facturaNueva, this.productoNuevo, cantidad:0, precio:0};
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
  Agregar(): void{
    this.service.saveDetalle(this.detalleNuevo).subscribe(res=>{
      alert("Cliente guardado con éxito");
    },
    err=> alert("Error")
    );
    this.router.navigate(["factura"]);
}


}



