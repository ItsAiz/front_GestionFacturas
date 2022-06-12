import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './Cliente/cliente/cliente.component';
import { FacturaComponent } from './Factura/factura/factura.component';
import { ProductoComponent } from './Producto/producto/producto.component';

const routes: Routes = [
  {path:'factura', component:FacturaComponent},
  {path:'cliente', component:ClienteComponent},
  {path:'producto', component:ProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
