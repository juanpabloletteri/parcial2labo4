import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  userform: FormGroup;

  constructor(private fb: FormBuilder, private miUsuario: Usuario, private miServicioUsuario: UsuarioService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'mail': new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])), //o se puede usar Validators.email
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'password2': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'nombre': new FormControl('', Validators.required),
      'apellido': new FormControl('', Validators.required)
    });
  }

  onSubmit(value: string) {

    if (this.userform.value.password == this.userform.value.password2) {
      this.miUsuario.mail = this.userform.value.mail;
      this.miUsuario.password = this.userform.value.password;
      this.miUsuario.nombre = this.userform.value.nombre;
      this.miUsuario.apellido = this.userform.value.apellido;
      this.miUsuario.tipo = 2;
      console.log(this.miUsuario);
    }
    else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Contraseñas no identicas!',
      })
    }

    /*this.miServicioUsuario.agregarUsuario(this.miUsuario)
      .then(data => {

      })*/
  }

}
