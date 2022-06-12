import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/Modelo/Factura';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Detalle } from 'src/app/Modelo/Detalle';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  detalles:Detalle[];
  facturaNueva: Factura ={id_factura:0, id_cliente:0, fecha:new Date('')};
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listarDetalles();
  }
  listarDetalles(){
    this.service.getDetalles().subscribe(data=>{
      this.detalles = data;
      console.log(data);
    });
  }

  buscarFactura(numb:number){
      this.service.getFactura(numb).subscribe(data=>{
          this.facturaNueva = data;
      });
  }

}



