import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos:Producto[];
  productoNuevo:Producto = {id_producto:0,nombre:'',precio:0, stock:0};
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listarProductos();
  }
  listarProductos(){
    this.service.getProductos().subscribe(data=>{
      this.productos = data;
    });
  }
  refresh(): void { window.location.reload(); }
  AgregarProducto(): void{
    this.service.saveProducto(this.productoNuevo).subscribe(res=>{
      alert("Producto guardado con éxito");
    },
    err=> alert("Error")
    );
    this.refresh();
}

}
