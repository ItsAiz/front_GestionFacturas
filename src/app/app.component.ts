import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudFacturas';
  constructor(private router:Router){ }
  
  Factura(){
    this.router.navigate(["factura"]);
  }
  Cliente(){
    this.router.navigate(["cliente"]);
  }
  Producto(){
    this.router.navigate(["producto"]);
  }
}
