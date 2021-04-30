import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EnvioEmailModel } from 'src/app/Models/email.model';
import { RegistroServiceService } from 'src/app/services/registro-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-help-email',
  templateUrl: './help-email.component.html',
  styleUrls: ['./help-email.component.css']
})
export class HelpEmailComponent implements OnInit {

  emailR: EnvioEmailModel = new EnvioEmailModel();

  constructor(private registroservice: RegistroServiceService) { }

  ngOnInit(): void {
  }

  enviarCorreo(forma : NgForm){
    if (forma.invalid){
      Swal.fire({
        icon: 'error',
        title: `${forma.status}`,
        text: `${forma.status} - Error en el formulario, por favor verifica`
      });
      console.log(forma);
    }

    this.registroservice.enviarEmail(this.emailR).subscribe( res => {
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: '¡Hecho!',
        text: 'Correo Enviado Satisfactoriamente'
      });
    });
  }

}
