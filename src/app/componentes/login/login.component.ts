import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  algo: any;
  userform: FormGroup;

  constructor(private fb: FormBuilder, private miUsuario: Usuario, private miServicioUsuario: UsuarioService, public rute: Router, private miServicioLogin: LoginService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'mail': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  onSubmit(value: string) {
    this.miUsuario.mail = this.userform.value.mail;
    this.miUsuario.password = this.userform.value.password;
    //alert("hacer logica de login");
    console.log(this.miUsuario);
    this.miServicioLogin.verificarusuario(this.miUsuario)
      .then(data => {
        if (data == "error") {
          swal("Usuario o contraseña no validas");
        }
        else {
          console.log(data);
          localStorage.setItem('token', data);
        }

      })
  }

}
