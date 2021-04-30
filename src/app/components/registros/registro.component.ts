
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { registroModel } from 'src/app/Models/registro.model';
import { CiudadEstadoService } from '../../services/ciudad-estado.service';
import { RegistroServiceService } from 'src/app/services/registro-service.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  datosR: registroModel = new registroModel();
  ciudadR: any;

  constructor(private ciudadService: CiudadEstadoService, private registroservice: RegistroServiceService) { }

  ngOnInit(): void {
    this.listarCiudad();
  }

  guardar( forma: NgForm){

    if (forma.invalid){
      Swal.fire({
        icon: 'error',
        title: `${forma.status}`,
        text: `${forma.status} - Error en el formulario, por favor verifica`
      });
      console.log(forma);
    }
    console.log(forma);
    console.log(this.datosR);

    this.registroservice.CreateRegistro(this.datosR).subscribe(response => {
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: '¡Hecho!',
        text: 'Información almacenada correctamente'
      });
    });
    }


  listarCiudad(){
      this.ciudadService.getCiudad().subscribe( data => {
      this.ciudadR = data;
      });
  }
}


