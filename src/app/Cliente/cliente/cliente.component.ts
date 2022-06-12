import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes:Cliente[];
  clienteNuevo: Cliente ={id_cliente:0, nombre:'', apellido:'',direccion:'', fecha_nacimiento:new Date(''), telefono: 0,email:''};
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listarClientes();
  }
  listarClientes(){
    this.service.getClientes().subscribe(data=>{
      this.clientes = data;
    });
  }
  Agregar(): void{
      this.service.saveCliente(this.clienteNuevo).subscribe(res=>{
        alert("Cliente guardado con éxito");
      },
      err=> alert("Error")
      );
      this.router.navigate(["factura"]);
  }

}
