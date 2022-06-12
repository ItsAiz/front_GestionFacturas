import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaComponent } from './Factura/factura/factura.component';
import { ClienteComponent } from './Cliente/cliente/cliente.component';
import { ProductoComponent } from './Producto/producto/producto.component';
import {FormsModule}from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import{HttpClientModule}from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    ClienteComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
